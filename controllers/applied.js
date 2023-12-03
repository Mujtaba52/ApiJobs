const Applied = require('../models/applied')

exports.getAllApplied = async (req, res, next) => {
    try {
        const [applied] = await Applied.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Applied Jobs fetched successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAppliedByCompany = async (req, res, next) => {
    try {
        const [applied] = await Applied.fetchCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Applied Jobs fetched successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAppliedByID = async (req, res, next) => {
    try {
        const [[applied]] = await Applied.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Applied Job fetched successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAppliedByUser = async (req, res, next) => {
    try {
        const [applied] = await Applied.fetchByUser(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Applied Jobs fetched successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAppliedByJob = async (req, res, next) => {
    try {
        const [applied] = await Applied.fetchByJob(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Applied Jobs fetched successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.applyJob = async (req, res, next) => {
    try {
        const [applied] = await Applied.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job Applied successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateAppliedJob = async (req, res, next) => {
    try {
        const [applied] = await Applied.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category updated successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteAppliedJob = async (req, res, next) => {
    try {
        const [applied] = await Applied.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category deleted successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusAppliedJob = async (req, res, next) => {
    try {
        const [applied] = await Applied.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: applied});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
