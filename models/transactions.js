const db = require('../util/database')

module.exports = class transactions {
    constructor(id, user, plan, date, amount, status) {
        this.id = id;
        this.user = user;
        this.plan = plan;
        this.date = date;
        this.amount = amount;
        this.status = status;
    }

    static fetchAll(){
        return db.query("SELECT transactions.*, (CASE user_type WHEN 'PROVIDER' THEN companies.name ELSE seekers.name END) as name, (CASE user_type WHEN 'PROVIDER' THEN companies.phone ELSE seekers.phone END) as phone, (CASE user_type WHEN 'PROVIDER' THEN companies.email ELSE seekers.email END) as email, (CASE user_type WHEN 'PROVIDER' THEN companies.headquater ELSE seekers.address END) as address, plans.name, plans.amount, plans.type, plans.accounttype, plans.timeperiod, plans.purpose FROM transactions LEFT JOIN companies ON companies.id = transactions.user LEFT JOIN seekers ON seekers.id = transactions.user INNER JOIN plans ON plans.id = transactions.plan")
    }

    static fetchByID(params){
        return db.query("SELECT transactions.*, (CASE user_type WHEN 'PROVIDER' THEN companies.name ELSE seekers.name END) as name, (CASE user_type WHEN 'PROVIDER' THEN companies.phone ELSE seekers.phone END) as phone, (CASE user_type WHEN 'PROVIDER' THEN companies.email ELSE seekers.email END) as email, (CASE user_type WHEN 'PROVIDER' THEN companies.headquater ELSE seekers.address END) as address, plans.name, plans.amount, plans.type, plans.accounttype, plans.timeperiod, plans.purpose FROM transactions LEFT JOIN companies ON companies.id = transactions.user LEFT JOIN seekers ON seekers.id = transactions.user INNER JOIN plans ON plans.id = transactions.plan WHERE transactions.id = ?", [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `transactions` (`user`, `user_type`, `plan`, `date`, `amount`) VALUES (?, ?, ?, ?, ?)', [params.user, params.usertype, params.plan, params.date, params.amount])
    }

    static edit(params){
        return db.query('UPDATE `transactions` SET `user` = ?, `user_type` = ?, `plan` = ?, `date` = ?, `amount` = ? WHERE (`id` = ?)', [params.user, params.usertype, params.plan, params.date, params.amount, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM transactions WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `transactions` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
