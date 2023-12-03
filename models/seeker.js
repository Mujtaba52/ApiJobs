const db = require('../util/database')

module.exports = class Seeker {
    constructor(id, name, username, email, password, phone, address, status, dob, gender) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.dob = dob;
        this.gender = gender;
    }

    static fetchAll(){
        return db.query('SELECT * FROM seekers')
    }

    static fetchRecommended(params){
        return db.query('SELECT seekers.*, jobs.id as job, cities.name as city_name, countries.name as country_name, IFNULL(offers.id, 0) as offer FROM seekers LEFT JOIN cities ON cities.id = seekers.city LEFT JOIN countries ON countries.id = seekers.country LEFT JOIN offers ON offers.user = seekers.id AND offers.job = ? INNER JOIN jobs ON jobs.tags LIKE CONCAT(\'%\', seekers.role ,\'%\') WHERE jobs.id = ?', [params.job, params.job])
    }

    static fetchByID(params){
        return db.query('SELECT seekers.*, cities.name as city_name, countries.name as country_name, (SELECT COUNT(*) FROM bookmarks WHERE bookmarks.user = seekers.id) as saved , (SELECT COUNT(*) FROM applied WHERE applied.user = seekers.id) as applied, IFNULL(user_plans.plan, 0) as plan FROM seekers LEFT JOIN cities ON cities.id = seekers.city LEFT JOIN countries ON countries.id = seekers.country LEFT JOIN user_plans ON user_plans.user = seekers.id AND user_plans.user_type = \'Seeker\' WHERE seekers.id = ?', [params.id])
    }

    static fetchByEmail(params){
        return db.query('SELECT * FROM seekers WHERE email = ?', [params.email])
    }

    static post(params){
        return db.query('INSERT INTO `seekers` (`name`, `username`, `email`, `password`, `phone`, `address`, `dob`, `gender`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, params.password, params.phone, params.address, params.dob, params.gender, params.type])
    }

    static edit(params){
        return db.query('UPDATE `seekers` SET `name` = ?, `city` = ?, `country` = ?, `username` = ?, `code` = ?, `phone` = ?, `address` = ?, `dob` = ?, `gender` = ? WHERE (`id` = ?)', [params.name, params.city, params.country, params.username, params.code, params.phone, params.address, params.dob, params.gender, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM seekers WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `seekers` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }

    static role(params){
        return db.query('UPDATE `seekers` SET `role` = ? WHERE id = ?', [params.role, params.id])
    }

    static verify(params){
        return db.query('UPDATE `seekers` SET `verified` = ?, `code` = ?, `phone` = ? WHERE id = ?', [params.verify, params.code, params.phone, params.id])
    }
}
