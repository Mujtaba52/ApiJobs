const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router();

router.get('/api/companies/all',  companyController.getAllCompanies);
router.post('/api/companies/get', companyController.getCompanyByID);
router.post('/api/companies/create', companyController.createCompany);
router.put('/api/companies/status', companyController.statusCompany);
router.put('/api/companies/update', companyController.updateCompany);
router.put('/api/companies/complete', companyController.completeCompany);
router.put('/api/companies/registration', companyController.completeRegistration)
router.put('/api/companies/verify', companyController.verifyCompany)
router.delete('/api/companies/delete', companyController.deleteCompany);

module.exports = router;
