const db = require('../util/database')

module.exports = class Bookmark {

    constructor(id, job, user) {
        this.id = id;
        this.job = job;
        this.user = user;
    }

    static fetchAll(params){
        return db.query('SELECT bookmarks.id, bookmarks.job, bookmarks.user, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM bookmarks INNER JOIN jobs ON jobs.id = bookmarks.job INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company WHERE bookmarks.user = ?', [params.user])
    }

    static create(params){
        return db.query('INSERT INTO bookmarks (job, user) VALUES (?, ?)', [params.job, params.user])
    }

    static delete(params){
        return db.query('DELETE FROM bookmarks WHERE id = ?', [params.id])
    }
}
