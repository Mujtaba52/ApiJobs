const Cover = require("../models/cover");

exports.getCoverByID = async (req, res, next) => {
    try {
        const [[cover]] = await Cover.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Cover fetched successfully", data: cover});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCoverByUser = async (req, res, next) => {
    try {
        const [[cover]] = await Cover.fetchByUser(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Cover fetched successfully", data: cover});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCoverByJob = async (req, res, next) => {
    try {
        const [cover] = await Cover.fetchByJob(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Cover fetched successfully", data: cover});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCover = async (req, res, next) => {
    try {
        const [cover] = await Cover.create(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Cover Created Successfully", data: cover});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
