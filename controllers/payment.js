const Payment = require("../models/payment");

exports.getPaymentCredentials = async (req, res, next) => {
    try {
        const [[payment]] = await Payment.fetch()
        res.status(200).json({ "responseCode": 200, "message": "Payment fetched successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getStripe = async (req, res, next) => {
    try {
        const [[payment]] = await Payment.fetchStripe()
        res.status(200).json({ "responseCode": 200, "message": "Stripe fetched successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPaypal = async (req, res, next) => {
    try {
        const [[payment]] = await Payment.fetchPaypal()
        res.status(200).json({ "responseCode": 200, "message": "Paypal fetched successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updatePaymentCredentials = async (req, res, next) => {
    try {
        const [payment] = await Payment.update(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Payment Updated successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateStripe = async (req, res, next) => {
    try {
        const [payment] = await Payment.updateStripe(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Stripe Updated successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updatePaypal = async (req, res, next) => {
    try {
        const [payment] = await Payment.updatePaypal(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Paypal Updated successfully", data: payment});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
