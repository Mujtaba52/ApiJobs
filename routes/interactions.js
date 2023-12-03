const express = require('express')
const interactionController = require('../controllers/interactions')

const router = express.Router();

router.get('/api/interactions/all', interactionController.getAllInteractions);
router.post('/api/interactions/get', interactionController.getInteractionByID);
router.post('/api/interactions/job', interactionController.getInteractionByJob);
router.post('/api/interactions/company', interactionController.getInteractionByCompany);
router.post('/api/interactions/user', interactionController.getInteractionByUser);
router.post('/api/interactions/type', interactionController.getInteractionByType);
router.post('/api/interactions/create', interactionController.createInteraction);
router.put('/api/interactions/status', interactionController.statusInteraction);
router.put('/api/interactions/update', interactionController.updateInteraction);
router.delete('/api/interactions/delete', interactionController.deleteInteraction);

module.exports = router;
