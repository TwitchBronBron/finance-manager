<script lang="ts">
	import Person from 'svelte-bootstrap-icons/lib/Person.svelte';
	import PersonFill from 'svelte-bootstrap-icons/lib/PersonFill.svelte';
	import * as firebase from '$lib/firebase';
	import { user, userProfileImageUrl } from './firebase';

	let profileImageUrl: string | undefined = undefined;
	// let profileImageUrl = 'https://lh3.googleusercontent.com/-vDRdlmJulhQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkBl0GWPM7dZLw1oSf5jkCqDFluKg/s128-c/photo.jpg';
	$: {
		profileImageUrl = $userProfileImageUrl;
	}
</script>

<div class="profile-icon text-white rounded-circle shadow-sm">
	<!-- profile icon-->
	{#if profileImageUrl}
		<img src={profileImageUrl} alt="profile" on:error={() => (profileImageUrl = undefined)} />
	{:else if $user}
		<PersonFill width="30" height="30" />
	{:else}
		<Person width="30" height="30" />
	{/if}
</div>

<style>
	img {
		width: 100%;
	}

	.profile-icon {
		overflow: hidden;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
