import { getAllCountries } from '../services/countries.js';

export const getCountriesController = async (req, res) => {
  const countries = await getAllCountries();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found countries!',
    data: countries,
  });
};
