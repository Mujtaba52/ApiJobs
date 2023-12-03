const Ads = require("../models/ads");


exports.getAds = async (req, res, next) => {
    try {
        const [[ads]] = await Ads.fetchAds()
        res.status(200).json({ "responseCode": 200, "message": "Ads fetched successfully", data: ads});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.postAds = async (req, res, next) => {
    try {
        const [ads] = await Ads.addAds(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Ad added successfully", data: ads});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
exports.updateAds = async (req, res, next) => {
    try {
        const [ads] = await Ads.editAds(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Ads updated successfully", data: ads});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
