const express = require('express')
const cvCourseController = require('../controllers/cvCourse')

const router = express.Router();

router.get('/api/cvCourse/all', cvCourseController.getAllCourse);
router.post('/api/cvCourse/create', cvCourseController.createCourse);
router.put('/api/cvCourse/update', cvCourseController.updateCourse);
router.delete('/api/cvCourse/delete', cvCourseController.deleteCourse);

module.exports = router;
