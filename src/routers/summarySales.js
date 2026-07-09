import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllSummarySalesController } from '../controllers/summarySales.js';

const router = Router();

router.get('/api/summary-sales', ctrlWrapper(getAllSummarySalesController));

export default router;
