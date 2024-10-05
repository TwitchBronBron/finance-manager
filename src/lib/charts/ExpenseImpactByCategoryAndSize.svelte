<script lang="ts">
	import Chart from './Chart.svelte';

	const config = {
		type: 'bubble',
		data: {
			datasets: [
				{
					label: 'Expense Size by Category',
					data: [
						{ x: 1, y: 1200, r: 20 }, // Rent
						{ x: 2, y: 400, r: 10 }, // Groceries
						{ x: 3, y: 300, r: 8 }, // Transportation
						{ x: 4, y: 150, r: 6 }, // Entertainment
						{ x: 5, y: 200, r: 7 } // Utilities
					],
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
					text: 'Expense Impact by Category and Size (Bubble Chart)'
				}
			},
			scales: {
				x: {
					title: {
						display: true,
						text: 'Expense Categories'
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
