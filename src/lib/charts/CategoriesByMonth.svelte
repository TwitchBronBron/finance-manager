<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'bar',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June'],
			datasets: [
				{
					label: 'Rent',
					data: [800, 800, 800, 800, 800, 800],
					backgroundColor: 'rgba(255, 99, 132, 0.5)'
				},
				{
					label: 'Groceries',
					data: [200, 150, 180, 170, 160, 175],
					backgroundColor: 'rgba(54, 162, 235, 0.5)'
				},
				{
					label: 'Transportation',
					data: [100, 110, 120, 130, 110, 120],
					backgroundColor: 'rgba(255, 206, 86, 0.5)'
				},
				{
					label: 'Entertainment',
					data: [50, 60, 55, 65, 60, 70],
					backgroundColor: 'rgba(75, 192, 192, 0.5)'
				},
				{
					label: 'Utilities',
					data: [100, 80, 100, 90, 100, 85],
					backgroundColor: 'rgba(153, 102, 255, 0.5)'
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
					text: 'Monthly Expenses by Category (Stacked)'
				}
			},
			scales: {
				x: {
					stacked: true
				},
				y: {
					beginAtZero: true,
					stacked: true
				}
			}
		}
	};
</script>

<Chart {config} />
