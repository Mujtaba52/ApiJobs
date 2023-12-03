const Interaction = require('../models/interactions')

exports.getAllInteractions = async (req, res, next) => {
    try {
        const [interactions] = await Interaction.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Interactions fetched successfully", data: interactions});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getInteractionByID = async (req, res, next) => {
    try {
        const [[interaction]] = await Interaction.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction fetched successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getInteractionByJob = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.fetchByJob(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction fetched successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getInteractionByCompany = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.fetchByCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interactions fetched successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getInteractionByUser = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.fetchByUser(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction fetched successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getInteractionByType = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.fetchByType(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction fetched successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createInteraction = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction created successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateInteraction = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction updated successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteInteraction = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Interaction deleted successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusInteraction = async (req, res, next) => {
    try {
        const [interaction] = await Interaction.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: interaction});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
