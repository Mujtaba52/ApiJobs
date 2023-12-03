const JobBank = require('../models/jobBanks')

exports.getAllJobBanks = async (req, res, next) => {
    try {
        const [jobBanks] = await JobBank.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Job Banks fetched successfully", data: jobBanks});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createJobBank = async (req, res, next) => {
    try {
        const [jobBank] = await JobBank.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job Bank created successfully", data: jobBank});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateJobBank = async (req, res, next) => {
    try {
        const [jobBank] = await JobBank.update(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job Bank updated successfully", data: jobBank});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteJobBank = async (req, res, next) => {
    try {
        const [jobBank] = await JobBank.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job Bank deleted successfully", data: jobBank});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
