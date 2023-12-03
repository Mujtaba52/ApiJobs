const express = require('express')
const cvResumeController = require('../controllers/cvResume')

const router = express.Router();

router.get('/api/cvResume/all', cvResumeController.getAllResume);
router.post('/api/cvResume/create', cvResumeController.createResume);
router.put('/api/cvResume/update', cvResumeController.updateResume);
router.delete('/api/cvResume/delete', cvResumeController.deleteResume);

module.exports = router;
