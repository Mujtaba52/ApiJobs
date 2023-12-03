const db = require('../util/database')

module.exports = class ApiJobs {
    constructor(id, title, description, locations, site, date, company, salary) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.locations = locations;
        this.site = site;
        this.date = date;
        this.company = company;
        this.salary = salary;
    }

    static fetchAll(){
        return db.query('SELECT * FROM api_jobs')
    }

    static fetchAllJobs(params){
        return db.query(`SELECT api_jobs.id, api_jobs.locations, '-', '-', api_jobs.company, api_jobs.title, '-', '-', api_jobs.salary, api_jobs.description, api_jobs.url, '-', '-', '-', '-', '-', '-', '-', api_jobs.date, '-', '-', api_jobs.company, '-', api_jobs.locations, '-', '-', api_jobs.created FROM api_jobs WHERE api_jobs.title LIKE '%${params.search}%'`)
    }

    static fetchRecentJobs(params){
        return db.query(`SELECT api_jobs.id, api_jobs.locations, '-', '-', api_jobs.company, api_jobs.title, '-', '-', api_jobs.salary, api_jobs.description, api_jobs.url, '-', '-', '-', '-', '-', '-', '-', api_jobs.date, '-', '-', api_jobs.company, '-', api_jobs.locations, '-', '-', api_jobs.created FROM api_jobs WHERE api_jobs.title LIKE '%${params.search}%' LIMIT 6`)
    }

    static fetchByID(params){
        return db.query('SELECT * FROM api_jobs WHERE api_jobs.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `api_jobs` (`title`, `description`, `locations`, `site`, `date`, `company`, `salary`, `url`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.title, params.description, params.locations, params.site, params.date, params.company, params.salary, params.url])
    }
}





