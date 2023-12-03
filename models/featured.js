const db = require('../util/database')

module.exports = class featured {
    constructor(id, job, days, date, status) {
        this.id = id;
        this.job = job;
        this.days = days
        this.date = date;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT featured.*, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags FROM featured INNER JOIN jobs ON jobs.id = featured.job')
    }

    static fetchByID(params){
        return db.query('SELECT featured.*, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags FROM featured INNER JOIN jobs ON jobs.id = featured.job WHERE featured.id = ? ', [params.id])
    }

    static checkFeatured(params){
        return db.query('SELECT * FROM featured WHERE job = ? ', [params.job])
    }

    static post(params){
        return db.query('INSERT INTO `featured` (`job`, `days`, `date`) VALUES (?, ?, ?)', [params.job, params.days, params.date])
    }

    static edit(params){
        return db.query('UPDATE `featured` SET `job` = ?, `days` = ?, `date` = ? WHERE (`id` = ?)', [params.job, params.days, params.date, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM featured WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `featured` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
