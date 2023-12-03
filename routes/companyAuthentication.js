const express = require('express')
const authenticationController = require('../controllers/companyAuthentication')

const router = express.Router();

router.post('/api/providerAuth/register', authenticationController.register);
router.post('/api/providerAuth/login', authenticationController.login);
router.post('/api/providerAuth/google', authenticationController.google);
router.post('/api/providerAuth/password', authenticationController.changePassword)

module.exports = router;
