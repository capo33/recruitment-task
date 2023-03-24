import express from "express";
import * as companyPsController from "../controllers/companyPsControlles";

// Create instance of express router
const router = express.Router();

router.get("/get_all_companies", companyPsController.getAllCompanies);
router.get("/postal_codes/00930/companies", companyPsController.getCompaniesByPostalCode1);
router.get("/postal_codes/02100/companies", companyPsController.getCompaniesByPostalCode2);
router.get("/postal_codes/01730/companies", companyPsController.getCompaniesByPostalCode3);

export default router;