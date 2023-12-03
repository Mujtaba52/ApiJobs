const express = require('express')
const cvLanguageController = require('../controllers/cvLanguages')

const router = express.Router();

router.get('/api/cvLanguage/all', cvLanguageController.getLanguages);
router.post('/api/cvLanguage/create', cvLanguageController.createLanguage);
router.put('/api/cvLanguage/update', cvLanguageController.updateLanguage);
router.delete('/api/cvLanguage/delete', cvLanguageController.deleteLanguage);

module.exports = router;
