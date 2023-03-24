import express from "express";
import * as companyController from "../controllers/companyControlles";

// Create instance of express router
const router = express.Router();

router.get("/get_all_companies", companyController.getAllCompanies);
router.get("/postal_codes/00930/companies", companyController.getCompaniesByPostalCode1);
router.get("/postal_codes/02100/companies", companyController.getCompaniesByPostalCode2);
router.get("/postal_codes/01730/companies", companyController.getCompaniesByPostalCode3);

export default router;