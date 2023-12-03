const db = require('../util/database')

module.exports = class Dashboard {

    static fetch(){
        return db.query('SELECT * FROM (SELECT COUNT(*) as jobs FROM jobs) a, (SELECT COUNT(*) as categories FROM categories) b, (SELECT COUNT(*) as seekers FROM seekers) c, (SELECT COUNT(*) as companies FROM companies) d, (SELECT COUNT(*) as cities FROM cities) e, (SELECT COUNT(*) as interactions FROM interactions) f, (SELECT COUNT(*) as transactions FROM transactions) g')
    }

    static fetchCompany(params){
        return db.query('SELECT * FROM (SELECT COUNT(*) as jobs FROM jobs WHERE jobs.company = ?) a, (SELECT COUNT(*) as applied FROM applied INNER JOIN jobs ON jobs.id = applied.job WHERE jobs.company = ?) f, (SELECT COUNT(*) as offers FROM offers INNER JOIN jobs ON jobs.id = offers.job WHERE jobs.company = ?) g', [params.company, params.company, params.company])
    }

    static fetchPieChart(){
        return db.query('SELECT * FROM (SELECT COUNT(*) as jobs FROM jobs) a, (SELECT COUNT(*) as seekers FROM seekers) c, (SELECT COUNT(*) as companies FROM companies) d')
    }

    static fetchLineChart(){
        return db.query('SELECT COUNT(*) as interactions, CAST(createddate as date) as d FROM interactions GROUP BY CAST(createddate as date) ORDER BY d DESC LIMIT 10')
    }

    static fetchCompanyLineChart(params){
        return db.query('SELECT COUNT(*) as interactions, CAST(createddate as date) as d FROM interactions INNER JOIN jobs ON interactions.job = jobs.id WHERE jobs.company = ? GROUP BY CAST(createddate as date) ORDER BY d DESC LIMIT 10', [params.company])
    }

    static fetchBarChart(){
        return db.query('SELECT COUNT(*) as applied, date FROM applied GROUP BY date ORDER BY date DESC LIMIT 10')
    }

    static dashboardTransactions(){
        return db.query('SELECT * FROM transactions ORDER BY id DESC')
    }

    static dashboardReports(){
        return db.query('SELECT * FROM reports ORDER BY id DESC')
    }
}
