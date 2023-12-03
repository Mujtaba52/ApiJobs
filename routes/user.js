const express = require('express')
const userController = require('../controllers/user')

const router = express.Router();

router.get('/api/users/all', userController.getAllUsers);
router.post('/api/users/get', userController.getUserByID);
router.post('/api/users/create', userController.createUser);
router.put('/api/users/status', userController.statusUser);
router.put('/api/users/update', userController.updateUser);
router.delete('/api/users/delete', userController.deleteUser);

module.exports = router;
