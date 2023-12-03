const Offer = require('../models/offers')

exports.getAllOffers = async (req, res, next) => {
    try {
        const [offers] = await Offer.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Offers fetched successfully", data: offers});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getOfferByID = async (req, res, next) => {
    try {
        const [[offer]] = await Offer.fetch(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offer fetched successfully", data: offer});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getOffersByCompany = async (req, res, next) => {
    try {
        const [offers] = await Offer.fetchByCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offers fetched successfully", data: offers});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getOffersByJob = async (req, res, next) => {
    try {
        const [offers] = await Offer.fetchByJob(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offers fetched successfully", data: offers});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getOffersByUser = async (req, res, next) => {
    try {
        const [offers] = await Offer.fetchByUser(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offers fetched successfully", data: offers});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createOffer = async (req, res, next) => {
    try {
        const [offer] = await Offer.create(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offer created successfully", data: offer});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateOfferStatus = async (req, res, next) => {
    try {
        const [offer] = await Offer.updateStatus(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Offer status updated successfully", data: offer});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
