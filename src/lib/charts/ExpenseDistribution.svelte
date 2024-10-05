<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'doughnut',
		data: {
			labels: ['Rent', 'Groceries', 'Transportation', 'Entertainment', 'Utilities'],
			datasets: [
				{
					label: 'Expenses by Category',
					data: [1200, 400, 300, 150, 200],
					backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'],
					borderColor: ['rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)'],
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
					text: 'Expense Distribution by Category (Doughnut Chart)'
				}
			}
		}
	};
</script>

<Chart {config} />
