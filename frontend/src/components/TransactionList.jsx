import React from 'react';

function TransactionList({ transactions, onDelete }) {
    return (
        <div className="history-section">
            <h3 className="panel-title">History</h3>

            {transactions.length === 0 ? (
                <p className="empty-state">No transactions recorded yet.</p>
            ) : (
                <ul className="transaction-list">
                    {transactions.map((transaction) => {
                        const isIncome = transaction.type === 'income';
                        const borderRightColor = isIncome ? '#4ade80' : '#f87171';
                        const sign = isIncome ? '+' : '-';

                        return (
                            <li className="transaction-item" key={transaction._id} style={{ borderRight: `5px solid ${borderRightColor}` }}>
                                <div>
                                    <span className="transaction-label">{transaction.description}</span>
                                    <small className="transaction-category">{transaction.category}</small>
                                </div>

                                <div className="transaction-actions">
                                    <span className="transaction-amount">
                                        {sign}₹{transaction.amount.toFixed(2)}
                                    </span>
                                    <button className="delete-button" onClick={() => onDelete(transaction._id)}>
                                        ✕
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default TransactionList;
