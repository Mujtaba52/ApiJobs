const db = require('../util/database')

module.exports = class plans {
    constructor(id, name, amount, type, accounttype, timeperiod, purpose, status) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.accounttype = accounttype;
        this.purpose = purpose;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT * FROM plans')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM plans WHERE id = ?', [params.id])
    }

    static fetchByType(params){
        return db.query('SELECT * FROM plans WHERE accounttype = ?', [params.type])
    }

    static post(params){
        return db.query('INSERT INTO `plans` (`name`, `amount`, `type`, `accounttype`, `timeperiod`, `purpose`) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.amount, params.type, params.accounttype, params.timeperiod, params.purpose])
    }

    static edit(params){
        return db.query('UPDATE `plans` SET `name` = ?, `amount` = ?, `type` = ?, `accounttype` = ?, `timeperiod` = ?, `purpose` = ? WHERE (`id` = ?)', [params.name, params.amount, params.type, params.accounttype, params.timeperiod, params.purpose, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM plans WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `plans` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
