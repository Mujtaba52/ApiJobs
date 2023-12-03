const db = require('../util/database')

module.exports = class interactions {
    constructor(id, job, user, query, title, interactiontype, status, createddate) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.query = query;
        this.title = title;
        this.interactiontype = interactiontype;
        this.status = status;
        this.createddate = createddate;
    }

    static fetchAll(){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user')
    }

    static fetchByID(params){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user WHERE interactions.id = ?', [params.id])
    }

    static fetchByCompany(params){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user WHERE jobs.company = ?', [params.company])
    }

    static fetchByJob(params){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user WHERE interactions.job = ?', [params.job])
    }

    static fetchByUser(params){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user WHERE interactions.user = ?', [params.user])
    }

    static fetchByType(params){
        return db.query('SELECT interactions.*, jobs.id as job, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, seekers.name, seekers.username, seekers.email, seekers.phone FROM interactions INNER JOIN jobs ON jobs.id = interactions.job INNER JOIN seekers ON seekers.id = interactions.user WHERE interactions.interactiontype = ?', [params.type])
    }

    static post(params){
        return db.query('INSERT INTO `interactions` (`job`, `user`, `query`, `title`, `interactiontype`) VALUES (?, ?, ?, ?, ?)', [params.job, params.user, params.query, params.title, params.interactiontype])
    }

    static edit(params){
        return db.query('UPDATE `interactions` SET `job` = ?, `user` = ?, `query` = ?, `title` = ?, `interactiontype` = ? WHERE (`id` = ?)', [params.job, params.user, params.query, params.title, params.interactiontype, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM interactions WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `interactions` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
