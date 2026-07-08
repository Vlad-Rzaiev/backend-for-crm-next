import { SummaryStatsCollection } from '../db/models/summaryStats.js';

export const getSummaryStats = async () => {
  const summaryStats = await SummaryStatsCollection.find();
  return summaryStats;
};
