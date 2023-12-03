const db = require('../util/database')

module.exports = class CvInterest {
    constructor(id, cv, interest) {
        this.id = id;
        this.cv = cv;
        this.interest = interest;
    }

    static fetchAll(cv){
        return db.query('SELECT * FROM cv_interest WHERE cv = ?', [cv])
    }

    static post(params){
        return db.query('INSERT INTO `cv_interest` (`cv`, `interest`) VALUES (?, ?)', [params.cv, params.interest])
    }

    static edit(params){
        return db.query('UPDATE `cv_interest` SET `cv` = ?, `interest` = ? WHERE (`id` = ?)', [params.cv, params.interest, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv_interest WHERE id = ?', [params.id])
    }
}
