const db = require("../util/database");

module.exports = class jobs {
  constructor(
    id,
    category,
    country,
    city,
    title,
    company,
    role,
    designation,
    salary,
    description,
    link,
    type,
    workdays,
    worktime,
    address,
    experience,
    qualification,
    skills,
    date,
    tags,
    status
  ) {
    this.id = id;
    this.category = category;
    this.country = country;
    this.city = city;
    this.title = title;
    this.company = company;
    this.role = role;
    this.designation = designation;
    this.salary = salary;
    this.description = description;
    this.link = link;
    this.type = type;
    this.workdays = workdays;
    this.worktime = worktime;
    this.address = address;
    this.experience = experience;
    this.qualification = qualification;
    this.skills = skills;
    this.date = date;
    this.tags = tags;
    this.status = status;
  }

  static fetchAll(params) {
    return db.query(
      "SELECT * FROM (SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.status, companies.name as company_name, api_jobs.category_name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(bookmarks.id, 0) as bookmark, jobs.created FROM jobs INNER JOIN api_jobs ON api_jobs.id = jobs.id INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ? UNION SELECT api_jobs.id, api_jobs.locations, '-', '-', api_jobs.company, api_jobs.company, api_jobs.title, '-', '-', api_jobs.salary, api_jobs.description, api_jobs.url, '-', '-', '-', '-', '-', '-', '-', api_jobs.date, '-', '-', api_jobs.company, api_jobs.category_name, api_jobs.locations, '-', '-', api_jobs.created FROM api_jobs) t ORDER BY created DESC",
      [params.user]
    );
  }

  static fetchJobs(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.status, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(bookmarks.id, 0) as bookmark, jobs.created FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ?",
      [params.user]
    );
  }

  static fetchRecommended(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(bookmarks.id, 0) as bookmark FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ? WHERE jobs.tags LIKE CONCAT('%', ? ,'%')",
      [params.user, params.tag]
    );
  }

  static fetchRecent() {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company ORDER BY jobs.created DESC LIMIT 5"
    );
  }

  static fetchByID(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(applied.id, 0) as applied, IFNULL(bookmarks.id, 0) as bookmark FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN applied ON applied.job = jobs.id AND applied.user = ? LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ? WHERE jobs.id = ?",
      [params.user, params.user, params.id]
    );
  }

  static search(params) {
    const search = params.search;
    const country = params.country;
    const category = params.category;
    const city = params.city;
    const company = params.company;
    const salaryStart = params.salaryStart;
    const salaryEnd = params.salaryEnd;
    const type = params.type;
    const isCountry = params.isCountry;
    const isCategory = params.isCategory;
    const isCity = params.isCity;
    const isCompany = params.isCompany;
    const isSalary = params.isSalary;
    const isType = params.isType;
    const query = `SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company WHERE jobs.title LIKE '%${search}%'`;
    const countryFilter = ` AND jobs.country IN ( ${country} ) `;
    const categoryFilter = ` AND jobs.category IN ( ${category} ) `;
    const cityFilter = ` AND jobs.city IN ( ${city} ) `;
    const companyFilter = ` AND jobs.company IN ( ${company} ) `;
    const salaryFilter = ` AND jobs.salary BETWEEN ${salaryStart} AND ${salaryEnd} `;
    const typeFilter = ` AND jobs.type IN ( ${type} ) `;
    var finalQuery = query;
    if (isCountry === "true") {
      finalQuery = finalQuery + countryFilter;
    }
    if (isCategory === "true") {
      finalQuery = finalQuery + categoryFilter;
    }
    if (isCity === "true") {
      finalQuery = finalQuery + cityFilter;
    }
    if (isCompany === "true") {
      finalQuery = finalQuery + companyFilter;
    }
    if (isSalary === "true") {
      finalQuery = finalQuery + salaryFilter;
    }
    if (isType === "true") {
      finalQuery = finalQuery + typeFilter;
    }
    return db.query(finalQuery);
  }

  static fetchByCountry(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(bookmarks.id, 0) as bookmark FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ? WHERE jobs.country = ?",
      [params.user, params.country]
    );
  }

  static fetchByCity(params) {
    console.log("params.city[0]   :",params.city)
    return db.query(
      "SELECT api_jobs.id, api_jobs.title, api_jobs.description, api_jobs.locations, api_jobs.site, api_jobs.date, api_jobs.company, api_jobs.salary, api_jobs.url, api_jobs.created, api_jobs.category_name, api_jobs.category_id, categories.name as category_name, IFNULL(bookmarks.id, 0) as bookmark FROM api_jobs INNER JOIN categories ON categories.id = api_jobs.category_id LEFT JOIN bookmarks ON bookmarks.job = api_jobs.id AND bookmarks.user = ? WHERE api_jobs.locations LIKE ?",
      [params.user, `%${params.city}%`]
    );
}

  static fetchByCompany(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, jobs.status, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name, IFNULL(bookmarks.id, 0) as bookmark FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company LEFT JOIN bookmarks ON bookmarks.job = jobs.id AND bookmarks.user = ? WHERE jobs.company = ?",
      [params.user, params.company]
    );
  }

  static fetchByProvider(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company WHERE jobs.company = ? ORDER BY jobs.id",
      [params.company]
    );
  }

  static fetchByProviderFeatured(params) {
    return db.query(
      "SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.company_n, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, jobs.created, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city LEFT JOIN companies ON companies.id = jobs.company WHERE jobs.company = ? ORDER BY jobs.id DESC LIMIT 4",
      [params.company]
    );
  }

  static fetchByCategory(params) {
    return db.query(
      "SELECT api_jobs.id, api_jobs.title, api_jobs.description, api_jobs.locations, api_jobs.site, api_jobs.date, api_jobs.company, api_jobs.salary, api_jobs.url, api_jobs.created, api_jobs.category_name, api_jobs.category_id, categories.name as category_name, IFNULL(bookmarks.id, 0) as bookmark FROM api_jobs INNER JOIN categories ON categories.id = api_jobs.category_id LEFT JOIN bookmarks ON bookmarks.job = api_jobs.id AND bookmarks.user = ? WHERE api_jobs.category_id = ?",
      [params.user, params.category]
    );
}

  static post(params) {
    return db.query(
      "INSERT INTO `jobs` (`category`, `country`, `city`, `title`, `company`, `company_n`, `role`, `designation`, `salary`, `description`, `link`, `type`, `workdays`, `worktime`, `address`, `experience`, `qualification`, `skills`, `date`, `tags`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        params.category,
        params.country,
        params.city,
        params.title,
        params.company,
        params.company_name,
        params.role,
        params.designation,
        params.salary,
        params.description,
        params.link,
        params.type,
        params.workdays,
        params.worktime,
        params.address,
        params.experience,
        params.qualification,
        params.skills,
        params.date,
        params.tags,
      ]
    );
  }

  static edit(params) {
    return db.query(
      "UPDATE `jobs` SET `category` = ?, `country` = ?, `city` = ?, `title` = ?, `company` = ?, `company_n` = ?, `role` = ?, `designation` = ?, `salary` = ?, `description` = ?, `link` = ?, `type` = ?, `workdays` = ?, `worktime` = ?, `address` = ?, `experience` = ?, `qualification` = ?, `skills` = ?, `date` = ?, `tags` = ? WHERE (`id` = ?)",
      [
        params.category,
        params.country,
        params.city,
        params.title,
        params.company,
        params.company_name,
        params.role,
        params.designation,
        params.salary,
        params.description,
        params.link,
        params.type,
        params.workdays,
        params.worktime,
        params.address,
        params.experience,
        params.qualification,
        params.skills,
        params.date,
        params.tags,
        params.id,
      ]
    );
  }

  static delete(params) {
    return db.query("DELETE FROM jobs WHERE id = ?", [params.id]);
  }

  static status(params) {
    return db.query("UPDATE `jobs` SET `status` = ? WHERE id = ?", [
      params.status,
      params.id,
    ]);
  }
};
