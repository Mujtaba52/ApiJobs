const express = require('express')
const jobsController = require('../controllers/jobs')

const router = express.Router();

router.post('/api/jobs/all', jobsController.getAllJobs);
router.post('/api/jobs/jobs', jobsController.getJobs);
router.post('/api/jobs/recommended', jobsController.getRecommendedJobs)
router.get('/api/jobs/recent', jobsController.getRecentJobs);
router.post('/api/jobs/search', jobsController.getSearch);
router.post('/api/jobs/get', jobsController.getJobByID);
router.post('/api/jobs/category', jobsController.getJobByCategory);
router.post('/api/jobs/country', jobsController.getJobByCountry);
router.post('/api/jobs/city', jobsController.getJobByCity);
router.post('/api/jobs/company', jobsController.getJobByCompany);
router.post('/api/jobs/provider', jobsController.getJobsByProvider);
router.post('/api/jobs/providerFeatured', jobsController.getJobsByProviderFeatured);
router.post('/api/jobs/create', jobsController.createJob);
router.put('/api/jobs/status', jobsController.statusJob);
router.put('/api/jobs/update', jobsController.updateJob);
router.delete('/api/jobs/delete', jobsController.deleteJob);

module.exports = router;
