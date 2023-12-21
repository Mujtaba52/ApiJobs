const db = require("../util/database");

module.exports = class ApiJobs {
  constructor(
    id,
    title,
    description,
    locations,
    site,
    date,
    company,
    salary,
    category_name
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.locations = locations;
    this.site = site;
    this.date = date;
    this.company = company;
    this.salary = salary;
    this.category_name = category_name;
    this.category_id = category_id;
  }

  static fetchAll() {
    return db.query("SELECT * FROM api_jobs");
  }

  static fetchAllJobs(params) {
    return db.query(
      `SELECT api_jobs.id, api_jobs.locations, '-', '-', api_jobs.company, api_jobs.title, '-', '-', api_jobs.salary, api_jobs.description, api_jobs.url, '-', '-', '-', '-', '-', '-', '-', api_jobs.date, '-', '-', api_jobs.company, '-', api_jobs.locations, '-', '-', api_jobs.created FROM api_jobs WHERE api_jobs.title LIKE '%${params.search}%'`
    );
  }

  static fetchRecentJobs(params) {
    return db.query(
      `SELECT api_jobs.id, api_jobs.locations, '-', '-', api_jobs.company, api_jobs.title, '-', '-', api_jobs.salary, api_jobs.description, api_jobs.url, '-', '-', '-', '-', '-', '-', '-', api_jobs.date, '-', '-', api_jobs.company, '-', api_jobs.locations, '-', '-', api_jobs.created FROM api_jobs WHERE api_jobs.title LIKE '%${params.search}%' LIMIT 6`
    );
  }

  static fetchByID(params) {
    return db.query("SELECT * FROM api_jobs WHERE api_jobs.id = ?", [
      params.id,
    ]);
  }

  static post(params) {
    const sql = `
            INSERT INTO api_jobs (title, description, locations, site, date, company, salary, url, category_name,category_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)
            ON DUPLICATE KEY UPDATE 
                title = VALUES(title), 
                description = VALUES(description), 
                locations = VALUES(locations), 
                site = VALUES(site), 
                date = VALUES(date), 
                company = VALUES(company), 
                salary = VALUES(salary),
                url = VALUES(url),
                category_name= VALUES(category_name),
                category_id = VALUES(category_id);

        `;

    return db.query(sql, [
      params.title,
      params.description,
      params.locations,
      params.site,
      params.date,
      params.company,
      params.salary,
      params.url,
      params.category_name,
      params.category_id,
    ]);
    //TODO: Run the query below in the DB
    // ALTER TABLE `api_jobs`
    // ADD UNIQUE (`url`);
  }
};
