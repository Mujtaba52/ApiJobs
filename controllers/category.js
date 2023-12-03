const Category = require('../models/category')

exports.getAllCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Categories fetched successfully", data: categories});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchFeatured()
        res.status(200).json({ "responseCode": 200, "message": "Featured Categories fetched successfully", data: categories});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCategoryByID = async (req, res, next) => {
    try {
        const [[category]] = await Category.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category fetched successfully", data: category});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCategory = async (req, res, next) => {
    try {
        const [category] = await Category.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category created successfully", data: category});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const [category] = await Category.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category updated successfully", data: category});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const [category] = await Category.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Category deleted successfully", data: category});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusCategory = async (req, res, next) => {
    try {
        const [category] = await Category.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: category});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
