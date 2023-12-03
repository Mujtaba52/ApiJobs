const Transaction = require('../models/transactions')

exports.getAllTransactions = async (req, res, next) => {
    try {
        const [transactions] = await Transaction.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Transactions fetched successfully", data: transactions});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getTransactionByID = async (req, res, next) => {
    try {
        const [[transaction]] = await Transaction.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Transaction fetched successfully", data: transaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createTransaction = async (req, res, next) => {
    try {
        const [transaction] = await Transaction.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Transaction created successfully", data: transaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateTransaction = async (req, res, next) => {
    try {
        const [transaction] = await Transaction.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Transaction updated successfully", data: transaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteTransaction = async (req, res, next) => {
    try {
        const [transaction] = await Transaction.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Transaction deleted successfully", data: transaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusTransaction = async (req, res, next) => {
    try {
        const [transaction] = await Transaction.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: transaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
