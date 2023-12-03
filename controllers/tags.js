const Tag = require('../models/tags')

exports.getAllTags = async (req, res, next) => {
    try {
        const [tags] = await Tag.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Tags fetched successfully", data: tags});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getTagByID = async (req, res, next) => {
    try {
        const [[tag]] = await Tag.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Tag fetched successfully", data: tag});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getTopTags = async (req, res, next) => {
    try {
        const [tags] = await Tag.topTags(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Top Tags fetched successfully", data: tags});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createTag = async (req, res, next) => {
    try {
        const [tag] = await Tag.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Tag created successfully", data: tag});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateTag = async (req, res, next) => {
    try {
        const [tag] = await Tag.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Tag updated successfully", data: tag});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteTag = async (req, res, next) => {
    try {
        const [tag] = await Tag.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Tag deleted successfully", data: tag});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusTag = async (req, res, next) => {
    try {
        const [tag] = await Tag.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: tag});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
