const UserPlans =  require('../models/userPlans')

exports.getAllUserPlans = async (req, res, next) => {
    try {
        const [userPlans] = await UserPlans.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "User Plans fetched successfully", data: userPlans});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getUserPlan = async (req, res, next) => {
    try {
        const [userPlan] = await UserPlans.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User Plan fetched successfully", data: userPlan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createUserPlan = async (req, res, next) => {
    try {
        const [userPlan] = await UserPlans.create(req.body)
        res.status(200).json({ "responseCode": 200, "message": "User Plan created successfully", data: userPlan});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
