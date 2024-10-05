<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'pie',
		data: {
			labels: ['Rent', 'Groceries', 'Transportation', 'Entertainment', 'Utilities'],
			datasets: [
				{
					label: 'Expenses by Category',
					data: [1200, 400, 300, 150, 200], // Sample expense data in dollars
					backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
					borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
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
					text: 'Monthly Expense Breakdown by Category'
				}
			}
		}
	};
</script>

<Chart {config} />
