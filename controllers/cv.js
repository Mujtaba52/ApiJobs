const CV = require('../models/cv')
const CVCareer = require('../models/cvCareer')
const CVCourse = require('../models/cvCourse')
const CVEducation  = require('../models/cvEducation')
const CVInterest = require('../models/cvInterest')
const CVLanguages = require('../models/cvLanguages')
const CVResume = require('../models/cvResume')
const CVSkills = require('../models/cvSkills')

exports.getAllCV = async (req, res, next) => {
    try {
        const [cvs] = await CV.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Cvs fetched successfully", data: cvs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCVByID = async (req, res, next) => {
    try {
        const [[cv]] = await CV.fetchByID(req.body)
        const [cv_career] = await CVCareer.fetchAll(cv.id)
        const [cv_course] = await CVCourse.fetchAll(cv.id)
        const [cv_education] = await CVEducation.fetchAll(cv.id)
        const [cv_interest] = await CVInterest.fetchAll(cv.id)
        const [cv_languages] = await CVLanguages.fetchAll(cv.id)
        // const [cv_resumes] = await CVResume.fetchAll(cv.id)
        const [cv_skills] = await CVSkills.fetchAll(cv.id)
        cv.careers = cv_career;
        cv.courses = cv_course;
        cv.educations = cv_education;
        cv.interests = cv_interest;
        cv.languages = cv_languages;
        // cv.resumes = cv_resumes;
        cv.skills = cv_skills;
        res.status(200).json({ "responseCode": 200, "message": "Categories fetched successfully", data: cv});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCVByUser = async (req, res, next) => {
    try {
        const [[cv]] = await CV.fetchByUser(req.body)
        const [cv_career] = await CVCareer.fetchAll(cv.id)
        const [cv_course] = await CVCourse.fetchAll(cv.id)
        const [cv_education] = await CVEducation.fetchAll(cv.id)
        const [cv_interest] = await CVInterest.fetchAll(cv.id)
        const [cv_languages] = await CVLanguages.fetchAll(cv.id)
        const [cv_resumes] = await CVResume.fetchAll(cv.id)
        const [cv_skills] = await CVSkills.fetchAll(cv.id)
        cv.careers = cv_career;
        cv.courses = cv_course;
        cv.educations = cv_education;
        cv.interests = cv_interest;
        cv.languages = cv_languages;
        cv.resumes = cv_resumes;
        cv.skills = cv_skills;
        res.status(200).json({ "responseCode": 200, "message": "Categories fetched successfully", data: cv});
    } catch (error) {
        console.log(error)
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.CheckCV = async (req, res, next) => {
    try {
        var status = "incomplete";
        const [[cv]] = await CV.fetchByUser(req.body)
        const [cv_career] = await CVCareer.fetchAll(cv.id)
        const [cv_course] = await CVCourse.fetchAll(cv.id)
        const [cv_education] = await CVEducation.fetchAll(cv.id)
        const [cv_interest] = await CVInterest.fetchAll(cv.id)
        const [cv_languages] = await CVLanguages.fetchAll(cv.id)
        const [cv_resumes] = await CVResume.fetchAll(cv.id)
        const [cv_skills] = await CVSkills.fetchAll(cv.id)
        cv.careers = cv_career;
        cv.courses = cv_course;
        cv.educations = cv_education;
        cv.interests = cv_interest;
        cv.languages = cv_languages;
        cv.resumes = cv_resumes;
        cv.skills = cv_skills;
        if (cv.role!==null) {
            if (cv_career.length > 0) {
                if (cv_course.length > 0) {
                    if (cv_education.length > 0) {
                        if (cv_interest.length > 0) {
                            if (cv_languages.length > 0) {
                                // if (cv_resumes.length > 0) {
                                    if (cv_skills.length > 0) {
                                        status = "complete"
                                    }
                                // }
                            }
                        }
                    }
                }
            }
        }
        res.status(200).json({ "responseCode": 200, status: status, "message": "Categories fetched successfully"});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updatePersonalStatement = async (req, res, next) => {
    try {
        const [statement] = await CV.statement(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Statement updated successfully", data: statement});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
