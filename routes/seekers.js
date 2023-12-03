const express = require('express')
const seekersController = require('../controllers/seekers')

const router = express.Router();

router.get('/api/seekers/all', seekersController.getAllSeeker);
router.post('/api/seekers/recommended', seekersController.getRecommendedSeekers)
router.post('/api/seekers/get', seekersController.getSeekerByID);
router.post('/api/seekers/email', seekersController.getSeekerByEmail);
router.post('/api/seekers/check', seekersController.checkSeeker);
router.post('/api/seekers/create', seekersController.createSeeker);
router.put('/api/seekers/status', seekersController.statusSeeker);
router.put('/api/seekers/role', seekersController.roleSeeker);
router.put('/api/seekers/update', seekersController.updateSeeker);
router.put('/api/seekers/verify', seekersController.verifySeeker);
router.delete('/api/seekers/delete', seekersController.deleteSeeker);

module.exports = router;
