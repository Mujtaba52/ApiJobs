const db = require('../util/database')

module.exports = class reports {
    constructor(id, job, user, feedback, date, status) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.feedback = feedback;
        this.date = date;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT reports.id, reports.feedback, reports.date, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM reports INNER JOIN jobs ON jobs.id = reports.job INNER JOIN seekers ON seekers.id = reports.user')
    }

    static fetchByID(params){
        return db.query('SELECT reports.id, reports.feedback, reports.date, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM reports INNER JOIN jobs ON jobs.id = reports.job INNER JOIN seekers ON seekers.id = reports.user WHERE reports.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `reports` (`job`, `user`, `feedback`, `date`) VALUES (?, ?, ?, ?)', [params.job, params.user, params.feedback, params.date])
    }

    static edit(params){
        return db.query('UPDATE `reports` SET `feedback` = ? WHERE (`id` = ?)', [params.feedback, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM reports WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `reports` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
