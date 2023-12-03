const express = require('express')
const planController = require('../controllers/plans')

const router = express.Router();

router.get('/api/plans/all', planController.getAllPlans);
router.post('/api/plans/get', planController.getPlanByID);
router.post('/api/plans/type', planController.getPlanByType);
router.post('/api/plans/create', planController.createPlan);
router.put('/api/plans/status', planController.statusPlan);
router.put('/api/plans/update', planController.updatePlan);
router.delete('/api/plans/delete', planController.deletePlan);

module.exports = router;
