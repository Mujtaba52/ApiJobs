const express = require('express')
const cvInterestController = require('../controllers/cvInterest')

const router = express.Router();

router.get('/api/cvInterest/all', cvInterestController.getAllInterests);
router.post('/api/cvInterest/create', cvInterestController.createInterest);
router.put('/api/cvInterest/update', cvInterestController.updateInterest);
router.delete('/api/cvInterest/delete', cvInterestController.deleteInterest);

module.exports = router;
