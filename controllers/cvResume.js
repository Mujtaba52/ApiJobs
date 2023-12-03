const CVResume = require('../models/cvResume')

exports.getAllResume = async (req, res, next) => {
    try {
        const [resumes] = await CVResume.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Resumes fetched successfully", data: resumes});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createResume = async (req, res, next) => {
    try {
        const [resume] = await CVResume.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Resume created successfully", data: resume});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateResume = async (req, res, next) => {
    try {
        const [resume] = await CVResume.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Resume updated successfully", data: resume});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteResume = async (req, res, next) => {
    try {
        const [resume] = await CVResume.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Resume deleted successfully", data: resume});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
