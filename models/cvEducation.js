const db = require('../util/database')

module.exports = class CvEducation {
    constructor(id, cv, qualification, timeperiod, institute) {
        this.id = id;
        this.cv = cv;
        this.qualification = qualification;
        this.timeperiod = timeperiod;
        this.institute = institute;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_education WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_education` (`cv`, `qualification`, `timeperiod`, `institute`) VALUES (?, ?, ?, ?)', [params.cv, params.qualification, params.timeperiod, params.institute])
    }

    static edit(params){
        return db.query('UPDATE `cv_education` SET `cv` = ?, `qualification` = ?, `timeperiod` = ?, `institute` = ? WHERE (`id` = ?)', [params.cv, params.qualification, params.timeperiod, params.institute, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_education WHERE id = ?', [params.id])
    }
}
