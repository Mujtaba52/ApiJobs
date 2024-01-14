const Seeker = require('../models/seeker')

exports.getAllSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.fetchAll()
        res.status(200).json({"responseCode": 200, "message": "Seekers fetched successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecommendedSeekers = async (req, res, next) => {
    try {
        const [seekers] = await Seeker.fetchRecommended(req.body)
        res.status(200).json({"responseCode": 200, "message": "Seekers fetched successfully", data: seekers});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSeekerByID = async (req, res, next) => {
    try {
        const [[seeker]] = await Seeker.fetchByID(req.body)
        res.status(200).json({"responseCode": 200, "message": "Seeker fetched successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSeekerByEmail = async (req, res, next) => {
    try {
        const [[seeker]] = await Seeker.fetchByEmail(req.body)
        console.log(req.body)
        console.log(seeker)
        res.status(200).json({"responseCode": 200, "message": "Seeker fetched successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.checkSeeker = async (req, res, next) => {
    try {
        var status = "incomplete"
        const [[seeker]] = await Seeker.fetchByID(req.body)
        console.log(seeker)
        if (seeker.name) {
            if (seeker.city) {
                if (seeker.country) {
                    if (seeker.username) {
                        if (seeker.email) {
                            if (seeker.password) {
                                if (seeker.phone) {
                                    if (seeker.address) {
                                        if (seeker.dob) {
                                            if (seeker.gender) {
                                                if (seeker.status) {
                                                        status = "complete"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        res.status(200).json({
            "responseCode": 200,
            "message": "Seeker fetched successfully",
            status: status,
            data: seeker
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.post(req.body)
        res.status(200).json({"responseCode": 200, "message": "Seeker created successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
exports.updateStatus = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.updateStatus(req.body)
        res.status(200).json({"responseCode": 200, "message": "Seeker created successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
exports.updateSeeker = async (req, res, next) => {
    try {
        const [seek] = await Seeker.edit(req.body)
        if (seek) {
            const [[seeker]] = await Seeker.fetchByID(req.body)
            res.status(200).json({"responseCode": 200, "message": "Seeker updated successfully", data: seeker});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Seeker updated successfully", data: null});
        }

    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.delete(req.body)
        res.status(200).json({"responseCode": 200, "message": "Seeker deleted successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.status(req.body)
        res.status(200).json({"responseCode": 200, "message": "Status changed successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.roleSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.role(req.body)
        res.status(200).json({"responseCode": 200, "message": "Role changed successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.verifySeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.verify(req.body)
        res.status(200).json({"responseCode": 200, "message": "Phone number verified successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
