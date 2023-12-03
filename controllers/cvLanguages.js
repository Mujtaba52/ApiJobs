const CVLanguage = require('../models/cvLanguages')

exports.getLanguages = async (req, res, next) => {
    try {
        const [languages] = await CVLanguage.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Languages fetched successfully", data: languages});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createLanguage = async (req, res, next) => {
    try {
        const [language] = await CVLanguage.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Language created successfully", data: language});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateLanguage = async (req, res, next) => {
    try {
        const [language] = await CVLanguage.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Language updated successfully", data: language});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteLanguage = async (req, res, next) => {
    try {
        const [language] = await CVLanguage.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Language deleted successfully", data: language});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
