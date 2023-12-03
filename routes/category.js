const express = require('express')
const categoryController = require('../controllers/category')

const router = express.Router();

router.get('/api/categories/all', categoryController.getAllCategories);
router.get('/api/categories/featured', categoryController.getFeaturedCategories);
router.post('/api/categories/get', categoryController.getCategoryByID);
router.post('/api/categories/create', categoryController.createCategory);
router.put('/api/categories/status', categoryController.statusCategory);
router.put('/api/categories/:update', categoryController.updateCategory);
router.delete('/api/categories/:delete', categoryController.deleteCategory);

module.exports = router;
