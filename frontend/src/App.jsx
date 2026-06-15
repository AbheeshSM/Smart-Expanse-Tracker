import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Balance from './components/Balance';
import BudgetChart from './components/BudgetChart';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Theme State (Defaults to dark mode, or changes based on user click)
  const [darkMode, setDarkMode] = useState(true);

  const API_URL = 'http://localhost:5000/api/transactions';

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get(API_URL);
        setTransactions(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  const addTransaction = async (transactionData) => {
    try {
      const response = await axios.post(API_URL, transactionData);
      setTransactions([response.data.data, ...transactions]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTransactions(transactions.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="loading-screen">Loading Financial Data...</div>;
  }

  return (
    <div className={`app-shell ${darkMode ? 'dark' : 'light'}`}>
      <div className="app-wrapper">
        <header className="app-header">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light mode' : '🌙 Dark mode'}
          </button>
        </header>

        <h1 className="app-title">Smart Budget Tracker</h1>

        <div className="app-grid">
          <div className="panel top-panel">
            <Balance transactions={transactions} darkMode={darkMode} />
          </div>
        </div>

        <div className="app-grid two-column">
          <div className="panel budget-panel">
            <BudgetChart transactions={transactions} darkMode={darkMode} />
          </div>
          <div className="panel history-panel">
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
              darkMode={darkMode}
            />
          </div>
        </div>

        <div className="app-grid">
          <div className="panel form-panel">
            <TransactionForm onAdd={addTransaction} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;