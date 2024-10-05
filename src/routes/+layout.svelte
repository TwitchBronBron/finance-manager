<script lang="ts">
	import { onMount } from 'svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '../app.css';
	onMount(async () => {
		await import('@popperjs/core');
		await import('bootstrap');
	});

	import Navbar from '$lib/Navbar.svelte';
</script>

<main>
	<Navbar />
	<slot />
</main>

<style>
</style>
