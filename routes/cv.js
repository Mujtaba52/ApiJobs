const express = require('express')
const cvController = require('../controllers/cv')

const router = express.Router();

router.get('/api/cv/all', cvController.getAllCV);
router.post('/api/cv/get', cvController.getCVByID);
router.post('/api/cv/user', cvController.getCVByUser);
router.post('/api/cv/check', cvController.CheckCV)
router.post('/api/cv/statement', cvController.updatePersonalStatement)

module.exports = router;
