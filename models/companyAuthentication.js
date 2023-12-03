const db = require('../util/database')
const bcrypt = require('bcrypt')

module.exports = class CompanyAuthentication {
    constructor(id, name, email, password, phone, headquater, status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.headquater = headquater;
        this.status = status;
    }

    static checkName(params){
        return db.query('SELECT * FROM companies WHERE name = ?', [params.name])
    }

    static checkEmail(params){
        return db.query('SELECT * FROM companies WHERE email = ?', [params.email])
    }

    static register(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('INSERT INTO `companies` (`name`, `size`, `city`, `country`, `phone`, `email`, `password`, `headquater`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.size, params.city, params.country, params.phone, params.email, hashedPassword, params.phone, params.address, params.headquater, params.type])
    }

    static changePassword(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('UPDATE `companies` SET `password` = ? WHERE (`id` = ?)', [hashedPassword, params.id])
    }
}
