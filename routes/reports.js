const express = require('express')
const reportsController = require('../controllers/reports')

const router = express.Router();

router.get('/api/reports/all', reportsController.getAllReports);
router.post('/api/reports/get', reportsController.getReportByID);
router.post('/api/reports/create', reportsController.createReport);
router.put('/api/reports/status', reportsController.statusReport);
router.put('/api/reports/update', reportsController.updateReport);
router.delete('/api/reports/delete', reportsController.deleteReport);

module.exports = router;
