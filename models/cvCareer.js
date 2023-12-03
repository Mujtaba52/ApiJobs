const db = require('../util/database')

module.exports = class CvCareer {
    constructor(id, cv, company, job, timeperiod, address, phone) {
        this.id = id;
        this.cv = cv;
        this.company = company;
        this.job = job;
        this.timeperiod = timeperiod;
        this.address = address;
        this.phone = phone;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_career WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_career` (`cv`, `company`, `job`, `timeperiod`, `address`, `phone`) VALUES (?, ?, ?, ?, ?, ?)', [params.cv, params.company, params.job, params.timeperiod, params.address, params.phone])
    }

    static edit(params){
        return db.query('UPDATE `cv_career` SET `cv` = ?, `company` = ?, `job` = ?, `timeperiod` = ?, `address` = ?, `phone` = ? WHERE (`id` = ?)', [params.cv, params.company, params.job, params.timeperiod, params.address, params.phone, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_career WHERE id = ?', [params.id])
    }
}
