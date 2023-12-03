const CVInterest = require('../models/cvInterest')

exports.getAllInterests = async (req, res, next) => {
    try {
        const [interests] = await CVInterest.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Interests fetched successfully", data: interests});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createInterest = async (req, res, next) => {
    try {
        const [interest] = await CVInterest.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interest created successfully", data: interest});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateInterest = async (req, res, next) => {
    try {
        const [interest] = await CVInterest.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interest updated successfully", data: interest});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteInterest = async (req, res, next) => {
    try {
        const [interest] = await CVInterest.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interest deleted successfully", data: interest});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
