const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Expense description
    amount: { type: Number, required: true }, // Amount spent
    category: { type: String, required: true }, // e.g., Food, Bills, Travel
    date: { type: Date, default: Date.now },  // Date of the expense
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Link to user
});

module.exports = mongoose.model('Expense', ExpenseSchema);