const CVEducation = require('../models/cvEducation')

exports.getAllEducations = async (req, res, next) => {
    try {
        const [educations] = await CVEducation.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Educations fetched successfully", data: educations});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createEducation = async (req, res, next) => {
    try {
        const [education] = await CVEducation.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Education created successfully", data: education});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateEducation = async (req, res, next) => {
    try {
        console.log(req.body)
        const [education] = await CVEducation.edit(req.body)
        console.log(education)
        res.status(200).json({ "responseCode": 200, "message": "Education updated successfully", data: education});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteEducation = async (req, res, next) => {
    try {
        const [education] = await CVEducation.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Education deleted successfully", data: education});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
