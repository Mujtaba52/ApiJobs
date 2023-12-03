const db = require('../util/database')

module.exports = class Country {
    constructor(id, name, size, city, country, phone, email, password, headquater, type, status) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.headquater = headquater;
        this.type = type;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT companies.id, companies.city, companies.country, companies.name, companies.size, companies.phone, companies.email, companies.headquater, companies.type, companies.verified, companies.status, cities.name as city_name, countries.name as country_name, (SELECT COUNT(*) FROM jobs WHERE jobs.company = companies.id) as jobs FROM companies INNER JOIN cities ON cities.id = companies.city INNER JOIN countries ON countries.id = companies.country ORDER BY companies.id DESC')
    }

    static fetchByID(params){
        return db.query('SELECT companies.id, companies.city, companies.country, companies.name, companies.size, companies.code, companies.phone, companies.email, companies.headquater, companies.type, companies.verified, companies.account, cities.name as city_name, countries.name as country_name, IFNULL(user_plans.plan, 0) as plan, (SELECT COUNT(*) FROM offers INNER JOIN jobs ON jobs.id = offers.job WHERE jobs.company = companies.id) as sent_offers, (SELECT COUNT(*) FROM applied INNER JOIN jobs ON jobs.id = applied.job WHERE jobs.company = companies.id) as applied FROM companies INNER JOIN cities ON cities.id = companies.city INNER JOIN countries ON countries.id = companies.country LEFT JOIN user_plans ON user_plans.user = companies.id AND user_plans.user_type = \'Provider\' WHERE companies.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `companies` (`name`, `size`, `city`, `country`, `phone`, `email`, `password`, `headquater`, `type`, `account`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.size, params.city, params.country, params.phone, params.email, params.password, params.headquater, params.type, params.account])
    }

    static edit(params){
        return db.query('UPDATE `companies` SET `size` = ?, `city` = ?, `country` = ?, `code` = ?, `phone` = ?, `email` = ?, `headquater` = ?, `type` = ? WHERE (`id` = ?)', [params.size, params.city, params.country, params.code, params.phone, params.email, params.headquater, params.type, params.id])
    }

    static complete(params){
        return db.query('UPDATE `companies` SET `country` = ?, `city` = ?, `code` = ?, `phone` = ?, `headquater` = ?, `type` = ? WHERE (`id` = ?)', [params.country, params.city, params.code, params.phone, params.headquater, params.type, params.id])
    }

    static completeRegistration(params){
        return db.query('UPDATE `companies` SET `name` = ?, `size` = ? WHERE (`id` = ?)', [params.name, params.size, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM companies WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `companies` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }

    static verify(params){
        return db.query('UPDATE `companies` SET `verified` = ?, `code` = ?, `phone` = ? WHERE id = ?', [params.verify, params.code, params.phone, params.id])
    }
}
