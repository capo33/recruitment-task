import axios from "axios";
import { RequestHandler } from "express";

import { urls } from "../api/urls";
import { db } from "../config/sql";

// @desc    Get all companies from the 3rd party API and save them to the DB
// @route   GET /api
// @access  Public
const getAllCompanies: RequestHandler = async (req, res) => {
  try {
    const maping = urls.map(async (url) => {
      const response = await axios.get(url);
      const data = response.data;
      const results = data.results;
      const insertData = await db.query(
        "INSERT INTO companies (results) VALUES ($1) RETURNING *",
        [results]
      );
      return insertData;
    });

    const allData = await Promise.all(maping);
    res.status(200).json({
      status: "success",
      results: allData.length,
      data: {
        companies: allData,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};

//   urls.map((url) => {
//     axios
//       .get(url)
//       .then((response) => {
//         const data = response.data.results;

//         db.query("INSERT INTO companies (results) VALUES ($1) RETURNING *", [
//           data,
//         ]).then((result) => {
//           return res.status(200).json({
//             message:
//               "Data fetched from api and saved to database please check the next routes",
//             data: result.rows,
//           });
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// };

// @desc Get all companies based on postal code 00930 (HELSINKI)
// @route GET /postal_codes/00930/companies
// @access Public
const getCompaniesByPostalCode1: RequestHandler = async (req, res) => {
  try {
    const helsinkiCompanies = await db.query(
      "SELECT * FROM companies where id = 1"
    );
    res.status(200).json({
      status: "success",
      results: helsinkiCompanies.rows?.length,
      data: {
        companies: helsinkiCompanies.rows,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};

// @desc Get all companies based on postal code 02100 (ESPOO)
// @route GET /postal_codes/02100/companies
// @access Public
const getCompaniesByPostalCode2: RequestHandler = async (req, res) => {
  try {
    const espooCompanies = await db.query(
      "SELECT * FROM companies where id = 2"
    );
    res.status(200).json({
      status: "success",
      results: espooCompanies.rows?.length,
      data: {
        companies: espooCompanies.rows,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};

// @desc Get all companies based on postal code 01730 (Vantaa)
// @route GET /postal_codes/01730/companies
// @access Public
const getCompaniesByPostalCode3: RequestHandler = async (req, res) => {
  try {
    const vantaaCompanies = await db.query(
      "SELECT * FROM companies where id = 3"
    );
    res.status(200).json({
      status: "success",
      results: vantaaCompanies.rows?.length,
      data: {
        companies: vantaaCompanies.rows,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};

export {
  getAllCompanies,
  getCompaniesByPostalCode1,
  getCompaniesByPostalCode2,
  getCompaniesByPostalCode3,
};
