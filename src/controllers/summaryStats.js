import { getSummaryStats } from '../services/summaryStats.js';

export const getSummaryStatsController = async (req, res) => {
  const summaryStats = await getSummaryStats();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found summary stats!',
    data: summaryStats,
  });
};
