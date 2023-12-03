const express = require('express')
const adsController = require('../controllers/ads')

const router = express.Router();

router.get('/api/ads/get', adsController.getAds);
router.post('/api/ads/post', adsController.postAds);
router.put('/api/ads/update', adsController.updateAds);

module.exports = router;
