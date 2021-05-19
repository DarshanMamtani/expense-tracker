import { useContext } from 'react';
import { ExpenseContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './assests/constants/categories';

const useTransactions = (title) => {
    resetCategories();

    const { transactions } = useContext(ExpenseContext);

    //selecting specific type: income or expense coming from globalState
    const selectedTypeTransactions = transactions.filter(t => t.type === title);
    let total = 0;
    selectedTypeTransactions.forEach(t => {
        total += t.amount;
    });

    // selecting categories based on type coming from static categories.js
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    selectedTypeTransactions.forEach(t => {
        const category = categories.find(c => c.category === t.category);

        if(category)
            category.amount += t.amount;
    });

    const filteredCategories = categories.filter(c => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories.map(c => c.color)
        }],
        labels: filteredCategories.map(c => c.category)
    }

    return {chartData, total};
};

export default useTransactions;