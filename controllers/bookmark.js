const Bookmark = require('../models/bookmark')

exports.getAllBookmarks = async (req, res, next) => {
    try {
        const [bookmarks] = await Bookmark.fetchAll(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Bookmarks fetched successfully", data: bookmarks});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.bookmarkJob = async (req, res, next) => {
    try {
        const [bookmark] = await Bookmark.create(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job bookmarked successfully", data: bookmark});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.removeBookmark = async (req, res, next) => {
    try {
        const [bookmark] = await Bookmark.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job bookmarked removed", data: bookmark});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
