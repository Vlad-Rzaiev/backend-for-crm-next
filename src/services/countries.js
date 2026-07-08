import { CountriesCollection } from '../db/models/countries.js';

export const getAllCountries = async () => {
  const countries = await CountriesCollection.find();
  return countries;
};
