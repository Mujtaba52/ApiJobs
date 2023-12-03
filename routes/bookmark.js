const express = require('express')
const bookmarkController = require('../controllers/bookmark')

const router = express.Router();

router.post('/api/bookmarks/all', bookmarkController.getAllBookmarks)
router.post('/api/bookmarks/add', bookmarkController.bookmarkJob)
router.delete('/api/bookmarks/remove', bookmarkController.removeBookmark)

module.exports = router
