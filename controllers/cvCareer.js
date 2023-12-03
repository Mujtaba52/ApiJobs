const CVCareer = require('../models/cvCareer')

exports.getAllCareers = async (req, res, next) => {
    try {
        const [careers] = await CVCareer.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Careers fetched successfully", data: careers});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCareer = async (req, res, next) => {
    try {
        const [career] = await CVCareer.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Career created successfully", data: career});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCareer = async (req, res, next) => {
    try {
        const [career] = await CVCareer.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Career updated successfully", data: career});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCareer = async (req, res, next) => {
    try {
        const [career] = await CVCareer.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Career deleted successfully", data: career});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
