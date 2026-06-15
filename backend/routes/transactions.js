const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction'); // Import our Mongoose model

// @route   GET /api/transactions
// @desc    Get all transactions from the database
router.get('/', async (req, res) => {
    try {
        // Find all transactions and sort them by the newest first
        const transactions = await Transaction.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error: Could not fetch transactions'
        });
    }
});

// @route   POST /api/transactions
// @desc    Add a new transaction to the database
router.post('/', async (req, res) => {
    try {
        // Mongoose automatically validates req.body against our TransactionSchema
        const newTransaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: newTransaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            // Extract the custom error messages we wrote in the Schema
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error: Could not save transaction'
            });
        }
    }
});

// @route   DELETE /api/transactions/:id
// @desc    Delete a specific transaction using its unique ID
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found with that ID'
            });
        }

        // Delete the found document
        await transaction.deleteOne();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error: Could not delete transaction'
        });
    }
});

module.exports = router;