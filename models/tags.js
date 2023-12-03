const db = require('../util/database')

module.exports = class tags {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT * FROM tags')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM tags WHERE id = ?', [params.id])
    }

    static topTags(params){
        return db.query('SELECT tags.id, tags.name, COUNT(*) as c FROM tags LEFT JOIN jobs ON jobs.tags LIKE CONCAT(\'%\', tags.name ,\'%\') INNER JOIN interactions ON interactions.job = jobs.id WHERE interactions.user = ? GROUP BY tags.id ORDER BY c DESC', [params.user])
    }

    static post(params){
        return db.query('INSERT INTO `tags` (`name`) VALUES (?)', [params.name])
    }

    static edit(params){
        return db.query('UPDATE `tags` SET `name` = ? WHERE (`id` = ?)', [params.name, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM tags WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `tags` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
