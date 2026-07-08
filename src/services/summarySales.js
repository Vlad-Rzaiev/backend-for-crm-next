import { SummarySalesCollection } from '../db/models/summarySales.js';

export const getAllSummarySales = async () => {
  const summarySales = await SummarySalesCollection.find();
  return summarySales;
};
