const express = require('express')
const offerController = require('../controllers/offers')

const router = express.Router();

router.get('/api/offers/all', offerController.getAllOffers);
router.post('/api/offers/id', offerController.getOfferByID);
router.post('/api/offers/company', offerController.getOffersByCompany);
router.post('/api/offers/job', offerController.getOffersByJob);
router.post('/api/offers/user', offerController.getOffersByUser);
router.post('/api/offers/create', offerController.createOffer);
router.post('/api/offers/update', offerController.updateOfferStatus);

module.exports = router;
