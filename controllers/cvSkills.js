const CVSkills = require('../models/cvSkills')

exports.getAllSkill = async (req, res, next) => {
    try {
        const [skills] = await CVSkills.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Skills fetched successfully", data: skills});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createSkill = async (req, res, next) => {
    try {
        const [skill] = await CVSkills.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Skill created successfully", data: skill});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSkill = async (req, res, next) => {
    try {
        const [skill] = await CVSkills.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Skill updated successfully", data: skill});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSkill = async (req, res, next) => {
    try {
        const [skill] = await CVSkills.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Skill deleted successfully", data: skill});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
