const express = require('express')
const cvEducationController = require('../controllers/cvEducation')

const router = express.Router();

router.get('/api/cvEducation/all', cvEducationController.getAllEducations);
router.post('/api/cvEducation/create', cvEducationController.createEducation);
router.put('/api/cvEducation/update', cvEducationController.updateEducation);
router.delete('/api/cvEducation/delete', cvEducationController.deleteEducation);

module.exports = router;
