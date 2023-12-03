const db = require('../util/database')

module.exports = class CvSkill {
    constructor(id, cv, skill) {
        this.id = id;
        this.cv = cv;
        this.skill = skill;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_skills WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_skills` (`cv`, `skill`) VALUES (?, ?)', [params.cv, params.skill])
    }

    static edit(params){
        return db.query('UPDATE `cv_skills` SET `cv` = ?, `skill` = ? WHERE (`id` = ?)', [params.cv, params.skill, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_skills WHERE id = ?', [params.id])
    }
}
