const User = require('../models/user')

exports.getAllUsers = async (req, res, next) => {
    try {
        const [users] = await User.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Users fetched successfully", data: users});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getUserByID = async (req, res, next) => {
    try {
        const [[user]] = await User.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User fetched successfully", data: user});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const [user] = await User.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User created successfully", data: user});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const [user] = await User.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User updated successfully", data: user});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const [user] = await User.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User deleted successfully", data: user});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusUser = async (req, res, next) => {
    try {
        const [user] = await User.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: user});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
