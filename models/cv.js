const db = require('../util/database')

module.exports = class Country {
    constructor(id, user, statement) {
        this.id = id;
        this.user = user;
        this.statement = statement;
    }

    static fetchAll(){
        return db.query('SELECT cv.*, seekers.name, seekers.role, seekers.username, seekers.email, seekers.password, seekers.code, seekers.phone, seekers.address, seekers.dob, seekers.gender FROM cv INNER JOIN seekers ON seekers.id = cv.user')
    }

    static fetchByID(params){
        return db.query('SELECT cv.*, seekers.name, seekers.role, seekers.username, seekers.email, seekers.password, seekers.code, seekers.phone, seekers.address, seekers.dob, seekers.gender FROM cv INNER JOIN seekers ON seekers.id = cv.user WHERE cv.id = ?', [params.id])
    }

    static fetchByUser(params){
        return db.query('SELECT cv.*, seekers.name, seekers.role, seekers.username, seekers.email, seekers.password, seekers.code, seekers.phone, seekers.address, seekers.dob, seekers.gender FROM cv INNER JOIN seekers ON seekers.id = cv.user WHERE cv.user = ?', [params.user])
    }

    static post(params){
        return db.query('INSERT INTO `cv` (`user`, `statement`) VALUES (?, ?)', [params.user, params.statement])
    }

    static create(user, statement){
        return db.query('INSERT INTO `cv` (`user`, `statement`) VALUES (?, ?)', [user, statement])
    }

    static edit(params){
        return db.query('UPDATE `cv` SET `user` = ?, `statement` = ? WHERE (`id` = ?)', [params.user, params.statement, params.id])
    }

    static statement(params){
        return db.query('UPDATE `cv` SET `statement` = ? WHERE (`id` = ?)', [params.statement, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `cv` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
