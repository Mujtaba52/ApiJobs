const db = require('../util/database')

module.exports = class CvLanguages {
    constructor(id, cv, language) {
        this.id = id;
        this.cv = cv;
        this.language = language;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_languages WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_languages` (`cv`, `language`) VALUES (?, ?)', [params.cv, params.language])
    }

    static edit(params){
        return db.query('UPDATE `cv_languages` SET `cv` = ?, `language` = ? WHERE (`id` = ?)', [params.cv, params.language, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_languages WHERE id = ?', [params.id])
    }
}
