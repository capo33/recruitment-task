import { Schema, model } from "mongoose";

import { CompanyInterface } from "../interfaces/modelsInterface";

const CompanySchema = new Schema<CompanyInterface>(
  {
    results: [
      {
        name: String,
        businessId: String,
        registrationDate: String,
        companyForm: String,
        detailsUri: String,
      },
    ],
  },
  { timestamps: true }
);

const Company = model<CompanyInterface>("Company", CompanySchema);

export default Company;
