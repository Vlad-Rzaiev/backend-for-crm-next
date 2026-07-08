import { getAllSummaryCategories } from '../services/summaryCategories.js';

export const getAllSummaryCategoriesController = async (req, res) => {
  const summaryCategories = await getAllSummaryCategories();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found summary categories!',
    data: summaryCategories,
  });
};
