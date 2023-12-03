const db = require('../util/database')
const bcrypt = require('bcrypt')

module.exports = class UserAuthentication {
    constructor(id, name, username, email, password, phone, address, status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.status = status;
    }

    static checkUsername(params){
        return db.query('SELECT * FROM user WHERE username = ?', [params.username])
    }

    static checkEmail(params){
        return db.query('SELECT * FROM user WHERE email = ?', [params.email])
    }

    static register(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('INSERT INTO `user` (`name`, `username`, `email`, `password`, `phone`, `address`) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, hashedPassword, params.phone, params.address])
    }
}
