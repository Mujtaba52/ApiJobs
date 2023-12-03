const db = require('../util/database')

module.exports = class JobBanks{
    constructor(id, email, created) {
        this.id = id;
        this.email = email;
        this.created = created;
    }

    static fetchAll(){
        return db.query('SELECT * FROM job_banks')
    }

    static post(params){
        return db.query('INSERT INTO `job_banks` (`email`) VALUES (?)', [params.email])
    }

    static update(params){
        return db.query('UPDATE `job_banks` SET `email` = ? WHERE (`id` = ?)', [params.email, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM `jobsapp`.`job_banks` WHERE (`id` = ?)', [params.id])
    }
}
