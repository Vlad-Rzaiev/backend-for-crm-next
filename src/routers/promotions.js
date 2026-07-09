import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllPromotionsController } from '../controllers/promotions.js';

const router = Router();

router.get('/api/promotions', ctrlWrapper(getAllPromotionsController));

export default router;
