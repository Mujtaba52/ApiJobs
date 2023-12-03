const express = require('express')
const userPlansController = require('../controllers/userPlans')

const router = express.Router();

router.get('/api/userPlans/all', userPlansController.getAllUserPlans);
router.post('/api/userPlans/id', userPlansController.getUserPlan);
router.post('/api/userPlans/create', userPlansController.createUserPlan);

module.exports = router;
