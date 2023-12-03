const express = require('express')
const cvCareerController = require('../controllers/cvCareer')

const router = express.Router();

router.get('/api/cvCareer/all', cvCareerController.getAllCareers);
router.post('/api/cvCareer/create', cvCareerController.createCareer);
router.put('/api/cvCareer/update', cvCareerController.updateCareer);
router.delete('/api/cvCareer/delete', cvCareerController.deleteCareer);

module.exports = router;
