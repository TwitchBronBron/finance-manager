<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'scatter',
		data: {
			datasets: [
				{
					label: 'Expenses Over Time',
					data: [
						{ x: 1, y: 1200 }, // January
						{ x: 2, y: 1500 }, // February
						{ x: 3, y: 1000 }, // March
						{ x: 4, y: 1700 }, // April
						{ x: 5, y: 1250 }, // May
						{ x: 6, y: 1600 } // June
					],
					backgroundColor: 'rgba(75, 192, 192, 0.5)'
				}
			]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Expense Value Comparison Over Time (Scatter Plot)'
				}
			},
			scales: {
				x: {
					type: 'linear',
					position: 'bottom',
					title: {
						display: true,
						text: 'Month'
					}
				},
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Expense Amount ($)'
					}
				}
			}
		}
	};
</script>

<Chart {config} />
