<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';

	let canvas: HTMLCanvasElement;
	export let config: any;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		// Initialize chart using default config set
		var myChart = new Chart(ctx as any, config as any);
	});
</script>

<canvas bind:this={canvas} width={400} height={400} />
