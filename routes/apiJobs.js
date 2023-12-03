const express = require('express')
const apiJobsController = require('../controllers/apiJobs')
const router = express.Router();

router.get('/api/apiJobs/all', apiJobsController.getAllApiJobs);
router.post('/api/apiJobs/jobs', apiJobsController.getAllApiJobsData)
router.post('/api/apiJobs/recent', apiJobsController.getRecentApiJobsData)
router.post('/api/apiJobs/job', apiJobsController.getJob)
router.post('/api/apiJobs/post', apiJobsController.addApiJobs);
router.get('/api/apiJobs/careerAustralia', apiJobsController.australiaJobs)
router.get('/api/apiJobs/careerNewZealand', apiJobsController.newzealandJobs)

module.exports = router;
