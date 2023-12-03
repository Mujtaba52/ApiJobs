const express = require('express')
const countryController = require('../controllers/country')

const router = express.Router();

router.get('/api/countries/all', countryController.getAllCountries);
router.post('/api/countries/get', countryController.getCountryByID);
router.post('/api/countries/create', countryController.createCountry);
router.put('/api/countries/status', countryController.statusCountry);
router.put('/api/countries/update', countryController.updateCountry);
router.delete('/api/countries/delete', countryController.deleteCountry);

module.exports = router;
