import { getAllSummaryCountries } from '../services/summaryCountries.js';

export const getAllSummaryCountriesController = async (req, res) => {
  const summaryCountries = await getAllSummaryCountries();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found summary countries!',
    data: summaryCountries,
  });
};
