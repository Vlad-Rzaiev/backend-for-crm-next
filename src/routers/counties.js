import { Router } from 'express';
import { getCountriesController } from '../controllers/countries.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/api/countries', ctrlWrapper(getCountriesController));

export default router;
