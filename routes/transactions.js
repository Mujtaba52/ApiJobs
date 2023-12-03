const express = require('express')
const transactionController = require('../controllers/transactions')

const router = express.Router();

router.get('/api/transactions/all', transactionController.getAllTransactions);
router.post('/api/transactions/get', transactionController.getTransactionByID);
router.post('/api/transactions/create', transactionController.createTransaction);
router.put('/api/transactions/status', transactionController.statusTransaction);
router.put('/api/transactions/update', transactionController.updateTransaction);
router.delete('/api/transactions/delete', transactionController.deleteTransaction);

module.exports = router;
