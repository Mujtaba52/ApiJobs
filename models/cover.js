const db = require('../util/database')

module.exports = class Cover {
    constructor(id, user, job, date, role, intro, body) {
        this.id = id;
        this.user = user;
        this.date = date;
        this.role = role;
        this.intro = intro;
        this.body = body;
    }

    static fetchByID(params){
        return db.query('SELECT * FROM cover WHERE id = ?', [params.id])
    }

    static fetchByUser(params){
        return db.query('SELECT * FROM cover WHERE user = ? AND job = ?', [params.user, params.job])
    }

    static fetchByJob(params){
        return db.query('SELECT * FROM cover WHERE job = ?', [params.job])
    }

    static create(params){
        return db.query('INSERT INTO `cover` (`user`, `job`, `date`, `role`, `intro`, `body`) VALUES (?, ?, ?, ?, ?, ?)', [params.user, params.job, params.date, params.role, params.intro, params.body])
    }
}
