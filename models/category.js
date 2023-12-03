const db = require('../util/database')

module.exports = class Category {
    constructor(id, name, description, image, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT *, (SELECT COUNT(*) FROM jobs INNER JOIN countries ON jobs.country = countries.id INNER JOIN cities ON jobs.city = cities.id WHERE jobs.category = categories.id) as jobs FROM categories ORDER BY categories.id DESC')
    }

    static fetchFeatured(){
        return db.query('SELECT *, (SELECT COUNT(*) FROM jobs INNER JOIN countries ON jobs.country = countries.id INNER JOIN cities ON jobs.city = cities.id WHERE jobs.category = categories.id) as jobs FROM categories ORDER BY jobs DESC LIMIT 4')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM categories WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO categories (`name`, `description`, `image`) VALUES (?, ?, ?)', [params.name, params.description, params.image])
    }

    static edit(params){
        return db.query('UPDATE `categories` SET `name` = ?, `description` = ?, `image` = ? WHERE `id` = ?', [params.name, params.description, params.image, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM categories WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `categories` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }
}
