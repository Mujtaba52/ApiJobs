const express = require('express')
const jobBanksController = require('../controllers/jobBanks')

const router = express.Router();

router.get('/api/jobBanks/all', jobBanksController.getAllJobBanks);
router.post('/api/jobBanks/create', jobBanksController.createJobBank);
router.put('/api/jobBanks/:update', jobBanksController.updateJobBank);
router.delete('/api/jobBanks/:delete', jobBanksController.deleteJobBank);

module.exports = router;
