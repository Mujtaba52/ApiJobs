const Report = require('../models/reports')

exports.getAllReports = async (req, res, next) => {
    try {
        const [reports] = await Report.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Reports fetched successfully", data: reports});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getReportByID = async (req, res, next) => {
    try {
        const [[report]] = await Report.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Report fetched successfully", data: report});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createReport = async (req, res, next) => {
    try {
        const [report] = await Report.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Report created successfully", data: report});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateReport = async (req, res, next) => {
    try {
        const [report] = await Report.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Report updated successfully", data: report});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteReport = async (req, res, next) => {
    try {
        const [report] = await Report.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Report deleted successfully", data: report});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusReport = async (req, res, next) => {
    try {
        const [report] = await Report.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: report});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
