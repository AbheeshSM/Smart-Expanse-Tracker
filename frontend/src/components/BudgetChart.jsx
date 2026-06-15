import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the Chart.js modules we need
ChartJS.register(ArcElement, Tooltip, Legend);

// Destructured darkMode along with transactions from props
function BudgetChart({ transactions, darkMode }) {

    // 1. Filter out only the expenses
    const expenses = transactions.filter(t => t.type === 'expense');

    // 2. Aggregate expenses by category
    const categories = ['Food', 'Rent', 'Entertainment', 'Utilities', 'Other'];
    const categoryTotals = categories.map(cat => {
        return expenses
            .filter(t => t.category === cat)
            .reduce((sum, t) => sum + t.amount, 0);
    });

    // Check if there are any expenses to display
    const hasExpenses = categoryTotals.some(total => total > 0);

    // 3. Define Chart.js layout configuration
    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Expenses ($)',
                data: categoryTotals,
                backgroundColor: [
                    '#ff6384', // Food - Pink/Red
                    '#36a2eb', // Rent - Blue
                    '#ffce56', // Entertainment - Yellow
                    '#4bc0c0', // Utilities - Teal
                    '#9966ff'  // Other - Purple
                ],
                borderWidth: 1,
            },
        ],
    };

    // 4. Chart configuration options (with dynamic dark/light labels)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    // Dynamically shifts label colors so they remain visible on dark or light backgrounds
                    color: darkMode ? '#f8fafc' : '#0f172a'
                },
            },
        },
    };

    return (
        <div className="chart-section">
            <h3 className="panel-title">Expense Breakdown</h3>
            {hasExpenses ? (
                <Doughnut data={data} options={options} />
            ) : (
                <p className="empty-state">Add some expenses below to generate your chart!</p>
            )}
        </div>
    );
}

export default BudgetChart;