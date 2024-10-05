<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'radar',
		data: {
			labels: ['Rent', 'Groceries', 'Transportation', 'Entertainment', 'Utilities'],
			datasets: [
				{
					label: 'Expenses by Category',
					data: [1200, 400, 300, 150, 200],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1
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
					text: 'Expense Patterns Across Categories (Radar Chart)'
				}
			},
			scales: {
				r: {
					beginAtZero: true
				}
			}
		}
	};
</script>

<Chart {config} />
