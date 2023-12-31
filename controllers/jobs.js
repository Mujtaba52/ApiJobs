const Job = require('../models/jobs')
const ApiJobs = require("../models/apiJobs");

exports.getAllJobs = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchAll(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobs = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchJobs(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecentJobs = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchRecent()
        res.status(200).json({ "responseCode": 200, "message": "Recent Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecommendedJobs = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchRecommended(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Recommended Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSearch = async (req, res, next) => {
    try {
        const [jobs] = await Job.search(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Recent Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByID = async (req, res, next) => {
    try {
        const [[job]] = await Job.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job fetched successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCountry = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCountry(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCity = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCity(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCategory = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCategory(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCompany = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobsByProvider = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByProvider(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobsByProviderFeatured = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByProviderFeatured(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createJob = async (req, res, next) => {
    try {
        const [job] = await Job.post(req.body)
        const apiJobsBody = { 
            title: req.body.title,
            description: req.body.description,
            locations: req.body.city, 
            site: req.body.link, 
            date: req.body.date,
            company: req.body.company_name,
            salary: req.body.salary,
            url: req.body.link,
            category_name: req.body.category, 
            category_id: req.body.category,
          }
        await ApiJobs.post(apiJobsBody);
        res.status(200).json({ "responseCode": 200, "message": "Job created successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateJob = async (req, res, next) => {
    try {
        const [job] = await Job.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job updated successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        const [job] = await Job.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job deleted successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusJob = async (req, res, next) => {
    try {
        const [job] = await Job.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
