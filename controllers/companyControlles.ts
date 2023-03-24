import axios from "axios";
import { RequestHandler } from "express";

import { urls } from "../api/urls";
import Company from "../models/Company";

// @desc    Get all companies from the 3rd party API and save them to the DB
// @route   GET /api
// @access  Public
const getAllCompanies: RequestHandler = (req, res) => {
  urls.map((url) => {
    axios
      .get(url)
      .then((response) => {
        const company = new Company({
          results: response.data.results,
        });
        company.save();
      })
      .catch((error) => {
        res.status(500).json({
          message: "Error fetching data",
          error: error,
        });
      });
  });

  res.status(200).json({
    message:
      "Data fetched from api and saved to database please check the next routes",
  });
};

// @desc Get all companies based on postal code 00930 (HELSINKI)
// @route GET /postal_codes/00930/companies
// @access Public
const getCompaniesByPostalCode1: RequestHandler = async (req, res) => {
  try {
    const companies = await Company.find();
    const helsinki = companies[0].results;
    res.status(200).json({
      message: "Helsinki data fetched based on postal code 00930 ",
      data: helsinki,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
      error: error,
    });
  }
};

// @desc Get all companies based on postal code 02100 (ESPOO)
// @route GET /postal_codes/02100/companies
// @access Public
const getCompaniesByPostalCode2: RequestHandler = async (req, res) => {
  try {
    const companies = await Company.find();
    const espoo = companies[1].results;
    res.status(200).json({
      message: "Espoo data fetched based on postal code 02100",
      data: espoo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
      error: error,
    });
  }
};

// @desc Get all companies based on postal code 01730 (VANTAA)
// @route GET /postal_codes/01730/companies
// @access Public
const getCompaniesByPostalCode3: RequestHandler = async (req, res) => {
  try {
    const companies = await Company.find();
    const vantaa = companies[2].results;
    res.status(200).json({
      message: "Vantaa data fetched based on postal code 01730",
      data: vantaa,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
      error: error,
    });
  }
};

export {
  getAllCompanies,
  getCompaniesByPostalCode1,
  getCompaniesByPostalCode2,
  getCompaniesByPostalCode3,
};
