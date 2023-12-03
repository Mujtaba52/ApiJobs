const Featured = require('../models/featured')

exports.getAllFeatured = async (req, res, next) => {
    try {
        const [featured] = await Featured.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Featured Jobs fetched successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedByID = async (req, res, next) => {
    try {
        const [featured] = await Featured.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Featured Job fetched successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createFeatured = async (req, res, next) => {
    try {
        const [featured] = await Featured.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Featured Job created successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateFeatured = async (req, res, next) => {
    try {
        const [featured] = await Featured.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Featured Job updated successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteFeatured = async (req, res, next) => {
    try {
        const [featured] = await Featured.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Featured Job deleted successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusFeatured = async (req, res, next) => {
    try {
        const [featured] = await Featured.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: featured});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
