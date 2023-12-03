const express = require('express')
const appliedController = require('../controllers/applied')

const router = express.Router();

router.get('/api/applied/all', appliedController.getAllApplied);
router.post('/api/applied/company', appliedController.getAppliedByCompany);
router.post('/api/applied/get', appliedController.getAppliedByID);
router.post('/api/applied/user', appliedController.getAppliedByUser);
router.post('/api/applied/job', appliedController.getAppliedByJob);
router.post('/api/applied/create', appliedController.applyJob);
router.put('/api/applied/status', appliedController.statusAppliedJob);
router.put('/api/applied/:update', appliedController.updateAppliedJob);
router.delete('/api/applied/:delete', appliedController.deleteAppliedJob);

module.exports = router;
