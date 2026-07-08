import { SummaryCategoriesCollection } from '../db/models/summaryCategories.js';

export const getAllSummaryCategories = async () => {
  const summaryCategories = await SummaryCategoriesCollection.find();
  return summaryCategories;
};
