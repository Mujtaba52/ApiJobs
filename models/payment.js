const db = require('../util/database')

module.exports = class Payment {
    constructor(id, version, paypal_client_id, paypal_secret_id, paypal_sandbox_url, paypal_return_url, paypal_cancel_url, stripe_publisher_key, stripe_secret_key, stripe_api_version) {
        this.id = id;
        this.version = version;
        this.paypal_client_id = paypal_client_id;
        this.paypal_secret_id = paypal_secret_id;
        this.paypal_sandbox_url = paypal_sandbox_url;
        this.paypal_return_url = paypal_return_url;
        this.paypal_cancel_url = paypal_cancel_url;
        this.stripe_publisher_key = stripe_publisher_key;
        this.stripe_secret_key = stripe_secret_key;
        this.stripe_api_version = stripe_api_version;
    }

    static fetch () {
        return db.query('SELECT * FROM paymentgateway LIMIT 1')
    }

    static fetchPaypal () {
        return db.query('SELECT id, version, paypal_client_id, paypal_sandbox_url, paypal_return_url, paypal_cancel_url FROM paymentgateway LIMIT 1')
    }

    static fetchStripe () {
        return db.query('SELECT id, version, stripe_publisher_key, stripe_secret_key, stripe_api_version FROM paymentgateway LIMIT 1')
    }

    static update (params) {
        return db.query('UPDATE `paymentgateway` SET `paypal_client_id` = ?, `paypal_secret_id` = ?, `paypal_sandbox_url` = ?, `paypal_return_url` = ?, `paypal_cancel_url` = ?, `stripe_publisher_key` = ?, `stripe_secret_key` = ?, `stripe_api_version` = ? WHERE (`id` = 1)', [params.paypal_client_id, params.paypal_secret_id, params.paypal_sandbox_url, params.paypal_return_url, params.paypal_cancel_url, params.stripe_publisher_key, params.stripe_secret_key, params.stripe_api_version])
    }

    static updatePaypal (params) {
        return db.query('UPDATE `paymentgateway` SET `paypal_client_id` = ?, `paypal_secret_id` = ?, `paypal_sandbox_url` = ?, `paypal_return_url` = ?, `paypal_cancel_url` = ? WHERE (`id` = 1)', [params.paypal_client_id, params.paypal_secret_id, params.paypal_sandbox_url, params.paypal_return_url, params.paypal_cancel_url])
    }

    static updateStripe (params) {
        return db.query('UPDATE `paymentgateway` SET `stripe_publisher_key` = ?, `stripe_secret_key` = ?, `stripe_api_version` = ? WHERE (`id` = 1)', [params.stripe_publisher_key, params.stripe_secret_key, params.stripe_api_version])
    }
}
