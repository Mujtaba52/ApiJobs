const express = require('express')
const featuredController = require('../controllers/featured')

const router = express.Router();

router.get('/api/featured/all', featuredController.getAllFeatured);
router.post('/api/featured/get', featuredController.getFeaturedByID);
router.post('/api/featured/create', featuredController.createFeatured);
router.put('/api/featured/status', featuredController.statusFeatured);
router.put('/api/featured/update', featuredController.updateFeatured);
router.delete('/api/featured/:delete', featuredController.deleteFeatured);

module.exports = router;
