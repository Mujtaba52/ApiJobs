const db = require('../util/database')

module.exports = class User {
    constructor(id, name, username, email, password, phone, address, status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    static fetchAll(){
        return db.query('SELECT * FROM user')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM user WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `user` (`name`, `username`, `email`, `password`, `phone`, `address`) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, params.password, params.phone, params.address])
    }

    static edit(params){
        return db.query('UPDATE `user` SET `name` = ?, `username` = ?, `email` = ?, `password` = ?, `phone` = ?, `address` = ? WHERE (`id` = ?)', [params.name, params.username, params.email, params.password, params.phone, params.address, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM user WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `user` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
