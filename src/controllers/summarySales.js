import { getAllSummarySales } from '../services/summarySales.js';

export const getAllSummarySalesController = async (req, res) => {
  const summarySales = await getAllSummarySales();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found summary sales!',
    data: summarySales,
  });
};
