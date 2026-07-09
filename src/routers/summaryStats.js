import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getSummaryStatsController } from '../controllers/summaryStats.js';

const router = Router();

router.get('/api/summary-stats', ctrlWrapper(getSummaryStatsController));

export default router;
