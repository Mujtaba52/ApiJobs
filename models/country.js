const db = require('../util/database')

module.exports = class Country {
    constructor(id, name, description, flag, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.flag = flag;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT *, (SELECT COUNT(*) FROM jobs WHERE jobs.country = countries.id) as jobs FROM countries ORDER BY countries.id DESC')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM countries WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO countries (`name`, `description`, `flag`) VALUES (?, ?, ?)', [params.name, params.description, params.flag])
    }

    static edit(params){
        return db.query('UPDATE `countries` SET `name` = ?, `description` = ?, `flag` = ? WHERE `id` = ?', [params.name, params.description, params.flag, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM countries WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `countries` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }
}
