const express = require('express')
const paymentController = require('../controllers/payment')

const router = express.Router()

router.get('/api/payment/get', paymentController.getPaymentCredentials)
router.get('/api/payment/getStripe', paymentController.getStripe)
router.get('/api/payment/getPaypal', paymentController.getPaypal)
router.put('/api/payment/update', paymentController.updatePaymentCredentials)
router.put('/api/payment/stripe', paymentController.updateStripe)
router.put('/api/payment/paypal', paymentController.updatePaypal)

module.exports = router;
