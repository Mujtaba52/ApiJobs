const ApiJobs = require('../models/apiJobs')
const axios = require("axios");
const apiJobsRouter = require("../routes/apiJobs");

exports.getAllApiJobs = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "API Jobs fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllApiJobsData = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.fetchAllJobs(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Jobs fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecentApiJobsData = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.fetchRecentJobs(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Jobs fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJob = async (req, res, next) => {
    try {
        const [[apiJobs]] = await ApiJobs.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Job fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.addApiJobs = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Jobs added successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.australiaJobs = async (req, res, next) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://public.api.careerjet.net/search?keywords&location=australia&user_ip=11.22.33.44&user_agent=Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0&affid=213e213hd12344552',
        headers: { }
    };

    axios.request(config)
        .then(async (response) => {
            console.log(JSON.stringify(response.data));
            const array = response.data.jobs
            for (let i = 0; i < array.length; i++) {
                const title = array[i].title;
                const description = array[i].description;
                const locations = array[i].locations;
                const site = array[i].site;
                const url = array[i].url;
                const date = array[i].date;
                const company = array[i].company;
                const salary = array[i].salary;
                await ApiJobs.post({
                    title: title,
                    description: description,
                    locations: locations,
                    site: site,
                    url: url,
                    date: date,
                    company: company,
                    salary: salary
                })
            }
            res.status(200).json({ "responseCode": 200, "message": "API Jobs added successfully", data: null});
        })
        .catch((error) => {
            console.log(error);
        });
}

exports.newzealandJobs = async (req, res, next) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://public.api.careerjet.net/search?keywords&location=new zealand&user_ip=11.22.33.44&user_agent=Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0&affid=213e213hd12344552',
        headers: { }
    };

    axios.request(config)
        .then(async (response) => {
            console.log(JSON.stringify(response.data));
            const array = response.data.jobs
            for (let i = 0; i < array.length; i++) {
                const title = array[i].title;
                const description = array[i].description;
                const locations = array[i].locations;
                const site = array[i].site;
                const url = array[i].url;
                const date = array[i].date;
                const company = array[i].company;
                const salary = array[i].salary;
                await ApiJobs.post({
                    title: title,
                    description: description,
                    locations: locations,
                    site: site,
                    url: url,
                    date: date,
                    company: company,
                    salary: salary
                })
            }
            res.status(200).json({ "responseCode": 200, "message": "API Jobs added successfully", data: null});
        })
        .catch((error) => {
            console.log(error);
        });
}
