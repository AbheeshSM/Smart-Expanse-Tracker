import React, { useState } from 'react';

function TransactionForm({ onAdd, darkMode }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [category, setCategory] = useState('Food');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!description.trim() || !amount) return;

        onAdd({ description, amount: parseFloat(amount), type, category });
        setDescription('');
        setAmount('');
    };

    const inputStyles = {
        width: '100%', padding: '10px', borderRadius: '6px',
        border: `1px solid ${darkMode ? '#334155' : '#ccc'}`,
        backgroundColor: darkMode ? '#1e293b' : '#fff',
        color: darkMode ? '#fff' : '#000',
        boxSizing: 'border-box'
    };

    return (
        <div className="form-section">
            <h3 className="panel-title">Add New Transaction</h3>
            <form className="transaction-form" onSubmit={onSubmit}>
                <div className="field-group">
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Rent, Groceries..."
                        className="input-field"
                    />
                </div>

                <div className="field-group">
                    <label>Amount (₹)</label>
                    <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="input-field"
                    />
                </div>

                <div className="field-group">
                    <label>Transaction Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} className="input-field">
                        <option value="expense">Expense (-)</option>
                        <option value="income">Income (+)</option>
                    </select>
                </div>

                <div className="field-group">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
                        <option value="Food">Food</option>
                        <option value="Rent">Rent / Housing</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Salary">Salary / Income</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button type="submit" className="primary-button">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;