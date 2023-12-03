const db = require('../util/database')

module.exports = class CvCourse {
    constructor(id, cv, course, timeperiod, institute) {
        this.id = id;
        this.cv = cv;
        this.course = course;
        this.timeperiod = timeperiod;
        this.institute = institute;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_course WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_course` (`cv`, `course`, `timeperiod`, `institute`) VALUES (?, ?, ?, ?)', [params.cv, params.course, params.timeperiod, params.institute])
    }

    static edit(params){
        return db.query('UPDATE `cv_course` SET `cv` = ?, `course` = ?, `timeperiod` = ?, `institute` = ? WHERE (`id` = ?)', [params.cv, params.course, params.timeperiod, params.institute, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_course WHERE id = ?', [params.id])
    }
}
