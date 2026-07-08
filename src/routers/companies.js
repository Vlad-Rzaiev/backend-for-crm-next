import { Router } from 'express';
import {
  getAllCompaniesController,
  getCompanyByIdController,
} from '../controllers/companies.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/companies', ctrlWrapper(getAllCompaniesController));

router.get('/companies/:companyId', ctrlWrapper(getCompanyByIdController));

export default router;
