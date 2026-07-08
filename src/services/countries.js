import { CountriesCollection } from '../db/models/countries.js';

export const getAllCountries = async () => {
  const countries = await CountriesCollection.find();
  return countries;
};

export const getCountryByID = async (countryId) => {
  const country = await CountriesCollection.findById(countryId);
  return country;
};
