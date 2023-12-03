const CVCourse = require('../models/cvCourse')

exports.getAllCourse = async (req, res, next) => {
    try {
        const [courses] = await CVCourse.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Course fetched successfully", data: courses});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCourse = async (req, res, next) => {
    try {
        const [course] = await CVCourse.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Course created successfully", data: course});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCourse = async (req, res, next) => {
    try {
        const [course] = await CVCourse.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Course updated successfully", data: course});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCourse = async (req, res, next) => {
    try {
        const [course] = await CVCourse.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Course deleted successfully", data: course});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
