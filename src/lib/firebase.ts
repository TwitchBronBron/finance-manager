import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from "firebase/auth";
import { addDoc, collection, doc, DocumentSnapshot, getDoc, getDocs, getFirestore, initializeFirestore, query, QueryDocumentSnapshot, setDoc, updateDoc, where, type DocumentData } from "firebase/firestore";
import { readable, writable } from "svelte/store";
import { sleep } from "./util";
import { Deferred } from "./Deferred";

const firebaseConfig = {
    apiKey: 'AIzaSyDsUMhLS_HIXpGxw43s_42Go9O5EqOWN3g',
    authDomain: 'finance-manager-3935c.firebaseapp.com',
    projectId: 'finance-manager-3935c',
    storageBucket: 'finance-manager-3935c.appspot.com',
    messagingSenderId: '169527534628',
    appId: '1:169527534628:web:d9d7cba684c823c4dee4b1',
    measurementId: 'G-V3NPMTEDFV'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//anytime we send `undefined` values, ignore them
initializeFirestore(app, {
    ignoreUndefinedProperties: true
});
export const db = getFirestore(app);

export const auth = getAuth(app);
export const userProfileImageUrl = writable<string | undefined>(undefined);
export let _user: User;

const getUserDeferred = new Deferred<User>();

export async function getUser() {
    return getUserDeferred.promise;
}

export const user = readable<User | null>(null, (set) => {
    onAuthStateChanged(auth, async (u) => {
        _user = u!;
        set(u);
        getUserDeferred.resolve(u!);
        await sleep(10);
        userProfileImageUrl.set(u?.photoURL ?? undefined);
        if (u) {
            initialize(u!);
        }
    });
});

export function signIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export function signOut() {
    return firebaseSignOut(auth);
}

export interface Category {
    name: string;
    group: string;
}
export const categories = writable<Category[]>([]);
// function addCategory(category: Category) {
//     doc(
//         collection(db, 'categories', _user.uid),
//     )
// }

const collections = {
    accounts: collection(db, 'accounts'),

};

export async function createAccount(name: string, userId: string) {
    const ref = await addDoc(collection(db, 'accounts'), {
        name: name,
        permissions: {
            owners: [userId]
        }
    });
    return getDoc(ref);
}

/**
 * Get the account with the given name (create it if it doesn't exist)
 */
async function getAccount(name: string, userId: string) {
    // Create a query with the array-contains clause
    const q = query(
        collections.accounts,
        where("name", "==", name),
        where(`permissions.owners`, "array-contains", userId)
    );

    // Execute the query
    const snapshot = await getDocs(q);
    let doc: QueryDocumentSnapshot<DocumentData, DocumentData> | DocumentSnapshot<DocumentData, DocumentData> = snapshot.docs[0];
    if (!doc) {
        doc = (await createAccount(name, userId));
    }
    return {
        doc: doc,
        id: doc.ref.id,
        data: doc.data()
    };
}

async function initialize(user: User) {
    console.log(user);
}

async function getLedgerForYear(accountId: string, year: number) {
    const ledgerDocRef = doc(db, 'accounts', accountId, 'ledgers', year.toString());

    let ledgerDocSnap = await getDoc(ledgerDocRef);
    if (!ledgerDocSnap.exists()) {

        // Define initial structure for the new document
        const newYearData = {
            year: year,
            transactions: [] // Start with an empty transactions array
        };

        // Create the document with the initial data
        await setDoc(ledgerDocRef, newYearData);
    }

    ledgerDocSnap = await getDoc(ledgerDocRef);
    return ledgerDocRef;
}

export interface Transaction {
    amount: number;
    date: string;
    note: string;
    category: string;
}

export async function getTransactions(year: number) {
    const user = await getUser();
    const account = await getAccount('default', user.uid);
    const ledgerDocRef = await getLedgerForYear(account.id, year);
    const ledgerDocSnap = await getDoc(ledgerDocRef);
    return ledgerDocSnap.data()?.transactions ?? [];
}

export async function replaceTransactions(year: number, transactions: Transaction[]) {
    const user = await getUser();
    const account = await getAccount('default', user.uid);
    const ledgerDocRef = await getLedgerForYear(account.id, year);
    await updateDoc(ledgerDocRef, {
        transactions: transactions
    });
}

export async function install() {
}
