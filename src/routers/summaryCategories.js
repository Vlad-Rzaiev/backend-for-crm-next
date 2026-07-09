import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllSummaryCategoriesController } from '../controllers/summaryCategories.js';

const router = Router();

router.get(
  '/api/summary-categories',
  ctrlWrapper(getAllSummaryCategoriesController),
);

export default router;
