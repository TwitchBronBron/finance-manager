<script>
	import CategoriesByMonth from '$lib/charts/CategoriesByMonth.svelte';
	import CategoryWiseExpenses from '$lib/charts/CategoryWiseExpenses.svelte';
	import ExpenseDistribution from '$lib/charts/ExpenseDistribution.svelte';
	import ExpenseImpactByCategoryAndSize from '$lib/charts/ExpenseImpactByCategoryAndSize.svelte';
	import ExpensePatternsAcrossCategories from '$lib/charts/ExpensePatternsAcrossCategories.svelte';
	import ExpensesOverTime from '$lib/charts/ExpensesOverTime.svelte';
	import ExpenseValueOverTime from '$lib/charts/ExpenseValueOverTime.svelte';
	import MonthyExpenseByCategory from '$lib/charts/MonthyExpenseByCategory.svelte';
</script>

<div style="width: 400px; height: 400px;">
	<ExpenseImpactByCategoryAndSize />
	<ExpenseValueOverTime />
	<ExpensePatternsAcrossCategories />
	<ExpensesOverTime />
	<ExpenseDistribution />
	<MonthyExpenseByCategory />
	<CategoryWiseExpenses />
	<CategoriesByMonth />
</div>
