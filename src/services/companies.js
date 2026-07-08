import { CompaniesCollection } from '../db/models/companies.js';

export const getAllCompanies = async () => {
  const companies = await CompaniesCollection.find();
  return companies;
};

export const getCompanyByID = async (companyId) => {
  const company = await CompaniesCollection.findById(companyId);
  return company;
};
