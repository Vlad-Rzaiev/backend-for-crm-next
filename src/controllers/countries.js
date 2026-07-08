import createHttpError from 'http-errors';
import { getAllCountries, getCountryByID } from '../services/countries.js';

export const getCountriesController = async (req, res) => {
  const countries = await getAllCountries();

  res.json({
    status: 200,
    message: 'Successfully found countries!',
    data: countries,
  });
};

export const getCountryByIdController = async (req, res, next) => {
  const { countryId } = req.params;
  const country = await getCountryByID(countryId);

  if (!country) {
    throw createHttpError(404, 'Country not found');
  }

  res.json({
    status: 200,
    message: `Successfully found country with id ${countryId}!`,
    data: country,
  });
};
