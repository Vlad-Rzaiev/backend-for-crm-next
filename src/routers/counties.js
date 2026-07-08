import { Router } from 'express';
import {
  getCountriesController,
  getCountryByIdController,
} from '../controllers/countries.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/countries', ctrlWrapper(getCountriesController));

router.get('/countries/:countryId', ctrlWrapper(getCountryByIdController));

export default router;
