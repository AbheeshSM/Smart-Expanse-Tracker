import React from 'react';

function Balance({ transactions, darkMode }) {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, item) => (acc += item.amount), 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, item) => (acc += item.amount), 0);
    const totalBalance = income - expenses;

    return (
        <div className="balance-section">
            <div className="panel-header">
                <h4>YOUR BALANCE</h4>
                <h1>₹{totalBalance.toFixed(2)}</h1>
            </div>

            <div className="balance-grid">
                <div className="balance-item income-item">
                    <h5>INCOME</h5>
                    <p className="positive">+₹{income.toFixed(2)}</p>
                </div>
                <div className="balance-item expense-item">
                    <h5>EXPENSE</h5>
                    <p className="negative">-₹{expenses.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default Balance;