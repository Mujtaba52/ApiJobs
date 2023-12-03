const db = require('../util/database')

module.exports = class Ads {
    constructor(id, banner_ad, interstitial_ad, app_open, count, publisher_id) {
        this.id = id;
        this.banner_ad = banner_ad;
        this.interstitial_ad = interstitial_ad;
        this.app_open = app_open;
        this.count = count;
        this.publisher_id = publisher_id;
    }

    static fetchAds(){
        return db.query('SELECT * FROM ads')
    }

    static addAds(params){
        return db.query('INSERT INTO `ads` (`banner_ad`, `interstitial_ad`, `count`, `app_open`, `publisher_id`) VALUES (?, ?, ?, ?, ?)', [params.banner_ad, params.interstitial_ad, params.count, params.app_open, params.publisher_id])
    }

    static editAds(params){
        return db.query('UPDATE `ads` SET `banner_ad` = ?, `interstitial_ad` = ?, `count` = ?, `app_open` = ?, `publisher_id` = ? WHERE (`id` = ?)', [params.banner_ad, params.interstitial_ad, params.count, params.app_open, params.publisher_id, params.id])
    }
}
