const express = require('express')
const cityController = require('../controllers/city')

const router = express.Router();

router.get('/api/cities/all', cityController.getAllCities);
router.post('/api/cities/get', cityController.getCityByID);
router.post('/api/cities/country', cityController.getCityByCountry);
router.post('/api/cities/create', cityController.createCity);
router.put('/api/cities/status', cityController.statusCity);
router.put('/api/cities/update', cityController.updateCity);
router.delete('/api/cities/delete', cityController.deleteCity);

module.exports = router;
