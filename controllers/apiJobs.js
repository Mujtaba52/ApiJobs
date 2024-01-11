const ApiJobs = require("../models/apiJobs");
const axios = require("axios");
const apiJobsRouter = require("../routes/apiJobs");

exports.getAllApiJobs = async (req, res, next) => {
  try {
    const [apiJobs] = await ApiJobs.fetchAll();
    res.status(200).json({
      responseCode: 200,
      message: "API Jobs fetched successfully",
      data: apiJobs,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getAllApiJobsData = async (req, res, next) => {
  try {
    const [apiJobs] = await ApiJobs.fetchAllJobs(req.body);
    res.status(200).json({
      responseCode: 200,
      message: "API Jobs fetched successfully",
      data: apiJobs,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getRecentApiJobsData = async (req, res, next) => {
  try {
    const [apiJobs] = await ApiJobs.fetchRecentJobs(req.body);
    res.status(200).json({
      responseCode: 200,
      message: "API Jobs fetched successfully",
      data: apiJobs,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getJob = async (req, res, next) => {
  try {
    const [[apiJobs]] = await ApiJobs.fetchByID(req.body);
    res.status(200).json({
      responseCode: 200,
      message: "API Job fetched successfully",
      data: apiJobs,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.addApiJobs = async (req, res, next) => {
  try {
    const [apiJobs] = await ApiJobs.post(req.body);
    res.status(200).json({
      responseCode: 200,
      message: "API Jobs added successfully",
      data: apiJobs,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Define the category mapping

//other 128
//124 Accounting and finacne
//123 software engineer
//109 Managment
//106 consultancy
//104 education
//103 healthcare
//99  hospitality
//98 analyst
const categoryIdMapping = {
  Other: 128,
  "Accounting": 124,
  "Technology": 123,
  "Agro and farming": 109,
  Fashion: 106,
  Education: 104,
  HealthCare: 103,
  "Hospitality": 99,
  "Sales and marketing": 98,
  Construction:131,
  Telecom:130,
  Automotive:129,
};

const categoryMapping = {
  "Technology": [
    "developer",
    "devops",
    "programmer",
    "backend",
    "frontend",
    "full stack",
  ],
  "Agro and farming": [
    "Marketing",
    "supervisor",
    "manager",
    "leadership",
    "administration",
    "executive",
    "director",
    "head of",
  ],
  Fashion: ["Fashion", "model"],
  Education: ["education", "teacher", "student", "educator", "lecturer"],
  HealthCare: [
    "nurse",
    "doctor",
    "hospital",
    "clinical",
    "psychiatry",
    "health",
    "surgeon",
    "surgery",
    "midwife",
    "physician",
    "medical",
    "therapist",
    "dental",
    "pharmacist",
  ],
  "Sales and marketing": ["Sale", "Sales"],
  // Chef: ["chef"],
  // Driver: ["driver", "delivery", "picker"],
  // "Sales and Marketing": ["sales", "marketing"],
  "Accounting": ["Accountant", "Accounting"],
  "Hospitality": ["Hospitality", "Tourism"],
  // "Call Center & Customer Service": ["Call", "Customer"],
  "Construction": ["Construction"],
  "Telecom": ["Telecom"],
  Automotive:["Automotive","driver","delivery","picker","mechanic","car","carrier","vehicle"]
};

// Function to determine the category of a job
const determineCategory = (title) => {
  for (const [category, keywords] of Object.entries(categoryMapping)) {
    if (keywords.some((keyword) => title.toLowerCase().includes(keyword))) {
      return { name: category, id: categoryIdMapping[category] };
    }
  }
  return { name: "Others", id: 128 }; // Default to "Other" category with id 128
};

exports.australiaJobs = async (req, res, next) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://public.api.careerjet.net/search?keywords&location=australia&user_ip=11.22.33.44&user_agent=Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0&affid=213e213hd12344552",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      const jobsArray = response.data.jobs;
      const jobPromises = jobsArray.map((job) => {
        const categoryInfo = determineCategory(job.title); // Determine the category
        console.log(" Aus Catergory **", categoryInfo);
        return ApiJobs.post({
          title: job.title,
          description: job.description,
          locations: job.locations,
          site: job.site,
          url: job.url,
          date: job.date,
          company: job.company,
          salary: job.salary,
          category_name: categoryInfo.name, // Add the category name
          category_id: categoryInfo.id, // Add the category id
        });
      });

      return Promise.all(jobPromises);
    })
    .then(() => {
      if (res) {
        res.status(200).json({
          responseCode: 200,
          message: "API Jobs added successfully",
          data: null,
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.newzealandJobs = async (req, res, next) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://public.api.careerjet.net/search?keywords&location=new zealand&user_ip=11.22.33.44&user_agent=Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0&affid=213e213hd12344552",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      const jobsArray = response.data.jobs;
      const jobPromises = jobsArray.map((job) => {
        const categoryInfo = determineCategory(job.title);
        console.log(" NewZ Catergory **", categoryInfo);
        return ApiJobs.post({
          title: job.title,
          description: job.description,
          locations: job.locations,
          site: job.site,
          url: job.url,
          date: job.date,
          company: job.company,
          salary: job.salary,
          category_name: categoryInfo.name, // Add the category name
          category_id: categoryInfo.id, // Add the category id
        });
      });

      return Promise.all(jobPromises);
    })
    .then(() => {
      if (res) {
        res.status(200).json({
          responseCode: 200,
          message: "API Jobs added successfully",
          data: null,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
