const express = require('express')
const authenticationController = require('../controllers/userAuthentication')

const router = express.Router();

router.post('/api/userAuth/register', authenticationController.register);
router.post('/api/userAuth/login', authenticationController.login);

module.exports = router;
