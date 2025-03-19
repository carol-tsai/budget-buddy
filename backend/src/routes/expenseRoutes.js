const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add a new expense
router.post('/add', async (req, res) => {
    try {
        const { name, amount, category, userId } = req.body;
        const expense = new Expense({ name, amount, category, userId });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
});

// Get all expenses for a user
router.get('/:userId', async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.params.userId }).sort({ date: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
});

module.exports = router;
