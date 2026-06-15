const mongoose = require('mongoose');

// Define the blueprint for a single financial transaction
const TransactionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please add a description'],
        trim: true // Removes accidental spaces at the beginning or end
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    type: {
        type: String,
        required: [true, 'Please specify if this is an income or expense'],
        enum: ['income', 'expense'] // Strict rule: only these two words are allowed
    },
    category: {
        type: String,
        required: [true, 'Please select a category'],
        default: 'Other' // If the user forgets to select a category, it defaults to 'Other'
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically tracks exactly when the transaction was created
    }
});

// Export the model so we can use it in our routes to save data
module.exports = mongoose.model('Transaction', TransactionSchema);