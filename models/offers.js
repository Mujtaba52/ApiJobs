const db = require('../util/database')

module.exports = class Offers {
    constructor(id, job, user, offerType, offer, offerStatus, date) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.offerType = offerType;
        this.offer = offer;
        this.offerStatus = offerStatus;
        this.date = date;
    }

    static fetchAll(){
        return db.query('SELECT * FROM offers')
    }

    static fetch(params){
        return db.query('SELECT offers.*, jobs.title, jobs.company, jobs.role, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, seekers.name as seeker_name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender, seekers.type, companies.name as company_name FROM offers INNER JOIN jobs ON jobs.id = offers.job INNER JOIN seekers ON seekers.id = offers.user INNER JOIN companies ON jobs.company = companies.id WHERE offers.id = ?', [params.id])
    }

    static fetchByCompany(params){
        return db.query('SELECT offers.*, jobs.title, jobs.company, jobs.role, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, seekers.name as seeker_name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender, seekers.type, companies.name as company_name FROM offers INNER JOIN jobs ON jobs.id = offers.job INNER JOIN seekers ON seekers.id = offers.user INNER JOIN companies ON jobs.company = companies.id WHERE jobs.company = ?', [params.company])
    }

    static fetchByJob(params){
        return db.query('SELECT offers.*, jobs.title, jobs.company, jobs.role, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, seekers.name as seeker_name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender, seekers.type, companies.name as company_name FROM offers INNER JOIN jobs ON jobs.id = offers.job INNER JOIN seekers ON seekers.id = offers.user INNER JOIN companies ON jobs.company = companies.id WHERE offers.job = ?', [params.job])
    }

    static fetchByUser(params){
        return db.query('SELECT offers.*, jobs.title, jobs.company, jobs.role, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, seekers.name as seeker_name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender, seekers.type, companies.name as company_name FROM offers INNER JOIN jobs ON jobs.id = offers.job INNER JOIN seekers ON seekers.id = offers.user INNER JOIN companies ON jobs.company = companies.id WHERE offers.user = ?', [params.user])
    }

    static create(params){
        return db.query('INSERT INTO `offers` (`job`, `user`, `offerType`, `offer`, `offerStatus`, `date`) VALUES (?, ?, ?, ?, ?, ?)', [params.job, params.user, params.offerType, params.offer, params.offerStatus, params.date])
    }

    static updateStatus(params){
        return db.query('UPDATE `offers` SET `offerStatus` = ?, `response` = ?, `responseDate` = ? WHERE (`id` = ?);', [params.status, params.response, params.responseDate, params.id])
    }
}
