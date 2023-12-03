const express = require('express')
const authenticationController = require('../controllers/seekerAuthentication')

const router = express.Router();

router.post('/api/seekerAuth/register', authenticationController.register);
router.post('/api/seekerAuth/login', authenticationController.login);
router.post('/api/seekerAuth/google', authenticationController.google);
router.post('/api/seekerAuth/password', authenticationController.changePassword)

module.exports = router;
