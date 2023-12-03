const Dashboard = require('../models/dashboard')

exports.getDashboard = async (req, res, next) => {
    try {
        const [[dashboard]] = await Dashboard.fetch()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCompanyDashboard = async (req, res, next) => {
    try {
        const [[dashboard]] = await Dashboard.fetchCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPieChart = async (req, res, next) => {
    try {
        const [[dashboard]] = await Dashboard.fetchPieChart()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getLineChart = async (req, res, next) => {
    try {
        const [dashboard] = await Dashboard.fetchLineChart()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCompanyLineChart = async (req, res, next) => {
    try {
        const [dashboard] = await Dashboard.fetchCompanyLineChart(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getBarChart = async (req, res, next) => {
    try {
        const [dashboard] = await Dashboard.fetchBarChart()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getDashboardTransactions = async (req, res, next) => {
    try {
        const [dashboard] = await Dashboard.dashboardTransactions()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getDashboardReports = async (req, res, next) => {
    try {
        const [dashboard] = await Dashboard.dashboardReports()
        res.status(200).json({ "responseCode": 200, "message": "Dashboard data fetched successfully", data: dashboard});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
