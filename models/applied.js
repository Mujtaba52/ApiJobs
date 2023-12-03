const db = require('../util/database')

module.exports = class Applied {
    constructor(id, job, user, data, proposal) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.data = data;
        this.proposal = proposal;
    }

    static fetchAll(){
        return db.query('SELECT applied.id, applied.date, applied.proposal, seekers.id as user, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user')
    }

    static fetchCompany(params){
        return db.query('SELECT applied.id, applied.job, applied.date, applied.proposal, seekers.id as user,  seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, IFNULL(offers.id, 0) as offer FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user LEFT JOIN offers ON offers.user = seekers.id AND offers.job = applied.job WHERE jobs.company = ?', [params.company])
    }

    static fetchByUser(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.id as user, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification, jobs.company, companies.name as company_name FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN companies ON companies.id = jobs.company INNER JOIN seekers ON seekers.id = applied.user WHERE applied.user = ?', [params.user])
    }

    static fetchByID(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.id as user, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user WHERE applied.id = ?', [params.id])
    }

    static fetchByJob(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.id as user, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification, IFNULL(offers.id, 0) as offer FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user LEFT JOIN offers ON offers.user = seekers.id AND offers.job = ? WHERE applied.job = ?', [params.job, params.job])
    }

    static post(params){
        return db.query('INSERT INTO `applied` (`job`, `user`, `date`, `proposal`) VALUES (?, ?, ?, ?)', [params.job, params.user, params.date, params.proposal])
    }

    static edit(params){
        return db.query('UPDATE `applied` SET `job` = ?, `user` = ?, `date` = ?, `proposal` = ? WHERE (`id` = ?)', [params.job, params.user, params.date, params.proposal, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM applied WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `applied` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
