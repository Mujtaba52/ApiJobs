const Country = require('../models/country')

exports.getAllCountries = async (req, res, next) => {
    try {
        const [countries] = await Country.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Countries fetched successfully", data: countries});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCountryByID = async (req, res, next) => {
    try {
        const [[country]] = await Country.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Country fetched successfully", data: country});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}


exports.createCountry = async (req, res, next) => {
    try {
        const [country] = await Country.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Country created successfully", data: country});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCountry = async (req, res, next) => {
    try {
        const [country] = await Country.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Country updated successfully", data: country});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCountry = async (req, res, next) => {
    try {
        const [country] = await Country.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Country deleted successfully", data: country});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusCountry = async (req, res, next) => {
    try {
        const [country] = await Country.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: country});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
