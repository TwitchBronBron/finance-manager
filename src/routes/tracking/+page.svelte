<script lang="ts">
	import { categories, getTransactions, install, replaceTransactions } from '$lib/firebase';
	import CloudCheckFill from 'svelte-bootstrap-icons/lib/CloudCheckFill.svelte';
	import type { Transaction } from '$lib/firebase';

	let transactions: Transaction[] = [];
	let transactionsPromise = getTransactions(2024).then((result) => {
		transactions = result;
		return result;
	});

	let syncHandle: NodeJS.Timeout;
	let isSyncQueued = false;

	function queueSync() {
		isSyncQueued = true;
		clearTimeout(syncHandle);
		syncHandle = setTimeout(() => {
			isSyncQueued = false;
			sync();
		}, 3_000);
	}

	async function sync() {
		await replaceTransactions(2024, transactions);
	}

	function onEdit() {
		ensureEmptyRow();
		queueSync();
	}

	function deleteTransaction(transaction: Transaction) {
		transactions = transactions.filter((t) => t !== transaction);
		queueSync();
	}

	function ensureEmptyRow() {
		console.log('ensureEmptyRow');
		const lastEntry = transactions[transactions.length - 1];
		//if the last row is empty, do nothing
		if (lastEntry.amount == undefined && !lastEntry.date && !lastEntry.note && !lastEntry.category) {
		} else {
			//the last row has at least one property value, so add a new empty row
			transactions = [...transactions, {} as Transaction];
		}
	}

	let newTransaction = {
		date: new Date()
	};
</script>

<svelte:head>
	<title>Tracking</title>
	<meta name="description" content="Tracking" />
</svelte:head>
<div>
	<h2>Transactions</h2>
</div>
{#await transactionsPromise then transactions}
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Date</th>
				<th>Amount</th>
				<th>Note</th>
				<th>Category</th>
				<th>
					<div class="text-center" style="position: relative">
						<span class={isSyncQueued ? 'text-warning' : 'text-success'}><CloudCheckFill /> </span>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each transactions as transaction}
				<tr>
					<td><input class="form-control" on:keyup={onEdit} on:change={onEdit} type="date" bind:value={transaction.date} /></td>
					<td>
						<div class="input-group">
							<span class="input-group-text p-0">$</span>
							<input class="form-control px-1" on:keyup={onEdit} on:change={onEdit} type="number" bind:value={transaction.amount} />
						</div>
					</td>
					<td><input class="form-control" on:keyup={onEdit} on:change={onEdit} type="string" bind:value={transaction.note} /></td>
					<td><input class="form-control" on:keyup={onEdit} on:change={onEdit} type="string" placeholder="i.e. groceries" bind:value={transaction.category} /></td>
					<td>
						<button class="btn btn-sm btn-danger" tabindex="-1" title="Delete transaction" on:click={() => deleteTransaction(transaction)}>&times;</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/await}

<!-- <h2>Categories</h2>
{#each $categories as $category}
	{$category.name}, {$category.group}
{/each}
<button class="btn btn-primary" on:click={() => categories.add({ name: 'New category', group: 'Income' })}>Add category</button> -->

<style>
	.table-striped .form-control,
	.input-group-text {
		background-color: transparent;
		border: none;
	}
</style>
