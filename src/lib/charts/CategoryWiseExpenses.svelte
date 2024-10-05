<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'bar',
		data: {
			labels: ['Rent', 'Groceries', 'Transportation', 'Entertainment', 'Utilities'],
			datasets: [
				{
					label: 'Expenses by Category',
					data: [1200, 400, 300, 150, 200], // Same data as in the pie chart
					backgroundColor: 'rgba(54, 162, 235, 0.5)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1
				}
			]
		},
		options: {
			indexAxis: 'y',
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Category-Wise Expenses'
				}
			},
			scales: {
				x: {
					beginAtZero: true
				}
			}
		}
	};
</script>

<Chart {config} />
