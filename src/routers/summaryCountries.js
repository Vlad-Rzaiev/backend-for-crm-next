import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllSummaryCountriesController } from '../controllers/summaryCountries.js';

const router = Router();

router.get('/summary-countries', ctrlWrapper(getAllSummaryCountriesController));

export default router;
