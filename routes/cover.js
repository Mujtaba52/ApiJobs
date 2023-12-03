const express = require('express')
const coverController = require('../controllers/cover')

const router = express.Router();

router.post('/api/cover/id', coverController.getCoverByID);
router.post('/api/cover/user', coverController.getCoverByUser)
router.post('/api/cover/job', coverController.getCoverByJob);
router.post('/api/cover/create', coverController.createCover);

module.exports = router;
