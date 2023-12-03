const SeekerAuth = require('../models/seekerAuthentication')
const Seeker = require('../models/seeker')
const CV = require('../models/cv')
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
    try {
        const [checkUser] = await SeekerAuth.checkUsername(req.body)
        if (checkUser.length === 0) {
            const [checkEmail] = await SeekerAuth.checkEmail(req.body)
            if (checkEmail.length === 0) {
                const [user] = await SeekerAuth.register(req.body)
                if (user) {
                    CV.create(user.insertId, 'Personal Statement')
                    res.status(200).json({"responseCode": 200, "message": "Registered Successfully", data: user});
                } else {
                    res.status(200).json({"responseCode": 207, "message": "Failed To Register", data: null});
                }
            } else {
                res.status(200).json({"responseCode": 205, "message": "Email already exist", data: null});
            }
        } else {
            res.status(200).json({"responseCode": 206, "message": "Username already exist", data: null});
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const [[checkEmail]] = await SeekerAuth.checkEmail(req.body)
        if (!checkEmail || checkEmail.length === 0) {
            res.status(200).json({responseCode: 205, message: "Email address not exist", data: null});
        } else {
            bcrypt.compare(req.body.password, checkEmail.password, (err, response) => {
                if (err) {
                    if (!err.statusCode) {
                        err.statusCode = 500
                    }
                    next(err)
                }
                if (response === true) {
                    res.send({ responseCode: 200, status: "OK", message: "Login Successful", data: checkEmail})
                } else {
                    res.send({ responseCode: 206, status: "FAILED", message: "Invalid Password ", data: null})
                }
            })
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.google = async (req, res, next) => {
    const [[checkEmail]] = await SeekerAuth.checkEmail(req.body)
    if (!checkEmail || checkEmail.length === 0) {
        const [user] = await SeekerAuth.register(req.body)
        if (user) {
            CV.create(user.insertId, 'Personal Statement')
            res.status(200).json({"responseCode": 200, "message": "Google Registered Successfully", data: user.insertId});
        } else {
            res.status(200).json({"responseCode": 207, "message": "Failed To Register Google", data: null});
        }
    } else {
        bcrypt.compare(req.body.password, checkEmail.password, (err, response) => {
            if (err) {
                if (!err.statusCode) {
                    err.statusCode = 500
                }
                next(err)
            }
            if (response === true) {
                res.send({ responseCode: 200, status: "OK", message: "Google Login Successful", data: checkEmail})
            } else {
                res.send({ responseCode: 210, status: "FAILED", message: "User may already registered with email", data: null})
            }
        })
    }
}

exports.changePassword = async (req, res, next) => {
    try {
        const [seeker] = await SeekerAuth.changePassword(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: seeker});
    } catch (error) {
        console.log(error)
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
