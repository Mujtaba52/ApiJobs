const Plan = require('../models/plans')

exports.getAllPlans = async (req, res, next) => {
    try {
        const [plans] = await Plan.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Plans fetched successfully", data: plans});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPlanByID = async (req, res, next) => {
    try {
        const [[plan]] = await Plan.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Plan fetched successfully", data: plan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPlanByType = async (req, res, next) => {
    try {
        const [plans] = await Plan.fetchByType(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Plans fetched successfully", data: plans});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createPlan = async (req, res, next) => {
    try {
        const [plan] = await Plan.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Plan created successfully", data: plan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updatePlan = async (req, res, next) => {
    try {
        const [plan] = await Plan.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Plan updated successfully", data: plan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deletePlan = async (req, res, next) => {
    try {
        const [plan] = await Plan.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Plan deleted successfully", data: plan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusPlan = async (req, res, next) => {
    try {
        const [plan] = await Plan.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: plan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
