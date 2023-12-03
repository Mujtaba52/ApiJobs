const db = require('../util/database')

module.exports = class UserPlans {

    constructor(id, user, plan, activation_date, user_type) {
        this.id = id;
        this.user = user;
        this.plan = plan;
        this.activation_date = activation_date;
        this.user_type = user_type
    }

    static fetchAll (){
        return db.query('SELECT * FROM user_plans')
    }

    static fetchByID (params){
        return db.query('SELECT * FROM user_plans WHERE id = ?', [params.id])
    }

    static create (params){
        return db.query('INSERT INTO `user_plans` (`user`, `plan`, `activation_date`, `user_type`) VALUES (?, ?, ?, ?)', [params.user, params.plan, params.activation_date, params.user_type])
    }
}
