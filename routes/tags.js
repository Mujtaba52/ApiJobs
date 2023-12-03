const express = require('express')
const tagsController = require('../controllers/tags')

const router = express.Router();

router.get('/api/tags/all', tagsController.getAllTags);
router.post('/api/tags/get', tagsController.getTagByID);
router.post('/api/tags/top', tagsController.getTopTags)
router.post('/api/tags/create', tagsController.createTag);
router.put('/api/tags/status', tagsController.statusTag);
router.put('/api/tags/update', tagsController.updateTag);
router.delete('/api/tags/delete', tagsController.deleteTag);

module.exports = router;
