import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createPromotionController,
  getAllPromotionsController,
} from '../controllers/promotions.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createPromotionSchema } from '../validation/promotions.js';

const router = Router();

router.get('/api/promotions', ctrlWrapper(getAllPromotionsController));

router.post(
  '/api/promotions',
  validateBody(createPromotionSchema),
  ctrlWrapper(createPromotionController),
);

export default router;
