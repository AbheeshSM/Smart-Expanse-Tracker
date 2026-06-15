const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to parse incoming JSON data

// Mount the Router
// This prefixes all routes in transactions.js with '/api/transactions'
app.use('/api/transactions', require('./routes/transactions'));

// Basic Test Route (you can keep or remove this)
app.get('/', (req, res) => {
    res.send('Smart Budget Tracker API is running...');
});

// Basic Test Route
app.get('/', (req, res) => {
    res.send('Smart Budget Tracker API is running...');
});

// MongoDB Connection
// (We will use a local database string for now, or you can use MongoDB Atlas later)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/budget_tracker';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB successfully!'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is flying high on port ${PORT}`);
});