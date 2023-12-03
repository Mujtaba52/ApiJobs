const db = require('../util/database')
const bcrypt = require('bcrypt')

module.exports = class SeekerAuthentication {
    constructor(id, name, username, email, password, phone, address, dob, gender, status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.status = status
    }

    static checkUsername(params){
        return db.query('SELECT * FROM seekers WHERE username = ?', [params.username])
    }

    static checkEmail(params){
        return db.query('SELECT seekers.*, ifnull(user_plans.plan, 0) as plan FROM seekers LEFT JOIN user_plans ON seekers.id = user_plans.user AND user_type = "Seeker" WHERE email = ?', [params.email])
    }

    static register(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('INSERT INTO `seekers` (`name`, `username`, `email`, `password`, `phone`, `address`, `dob`, `gender`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, hashedPassword, params.phone, params.address, params.dob, params.gender])
    }

    static changePassword(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('UPDATE `seekers` SET `password` = ? WHERE (`id` = ?)', [hashedPassword, params.id])
    }
}
