const City = require('../models/city')

exports.getAllCities = async (req, res, next) => {
    try {
        const [cities] = await City.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Cities fetched successfully", data: cities});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCityByID = async (req, res, next) => {
    try {
        const [[city]] = await City.fetchByID(req.body)
        console.log(city)
        res.status(200).json({ "responseCode": 200, "message": "City fetched successfully", data: city});
    } catch (error) {
        console.log(error)
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCityByCountry = async (req, res, next) => {
    try {
        const [city] = await City.fetchByCountry(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Cities by Country fetched successfully", data: city});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCity = async (req, res, next) => {
    try {
        const [city] = await City.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "City created successfully", data: city});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCity = async (req, res, next) => {
    try {
        const [city] = await City.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "City updated successfully", data: city});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCity = async (req, res, next) => {
    try {
        const [city] = await City.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "City deleted successfully", data: city});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusCity = async (req, res, next) => {
    try {
        const [city] = await City.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: city});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
