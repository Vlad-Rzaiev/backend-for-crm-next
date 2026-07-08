import createHttpError from 'http-errors';
import { getAllCompanies, getCompanyByID } from '../services/companies.js';

export const getAllCompaniesController = async (req, res) => {
  const companies = await getAllCompanies();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found companies!',
    data: companies,
  });
};

export const getCompanyByIdController = async (req, res, next) => {
  const { companyId } = req.params;
  const company = await getCompanyByID(companyId);

  if (!company) {
    throw createHttpError(404, 'Company not found');
  }

  res.status(200).json({
    status: 200,
    success: true,
    message: `Successfully found company with id ${companyId}!`,
    data: company,
  });
};
