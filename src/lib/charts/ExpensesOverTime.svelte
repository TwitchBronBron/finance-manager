<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'line',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June'],
			datasets: [
				{
					label: 'Total Monthly Expenses',
					data: [1800, 1500, 1600, 1700, 1550, 1650], // Total expense data for each month
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 2,
					fill: true
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
					text: 'Expense Trend Over the Past 6 Months'
				}
			},
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	};
</script>

<Chart {config} />
