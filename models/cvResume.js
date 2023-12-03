const db = require('../util/database')

module.exports = class CvResume {
    constructor(id, cv, resume) {
        this.id = id;
        this.cv = cv;
        this.resume = resume;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_resumes WHERE cv = ?', [cv])
    }

    static post (params){
        return db.query('INSERT INTO `cv_resumes` (`cv`, `resume`) VALUES (?, ?)', [params.cv, params.resume])
    }

    static edit (params){
        return db.query('UPDATE `cv_resumes` SET `cv` = ?, `resume` = ? WHERE (`id` = ?)', [params.cv, params.resume, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_resumes WHERE id = ?', [params.id])
    }
}
