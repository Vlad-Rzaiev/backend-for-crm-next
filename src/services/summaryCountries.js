import { SummaryCountriesCollection } from '../db/models/summaryCountries.js';

export const getAllSummaryCountries = async () => {
  const summaryCountries = await SummaryCountriesCollection.find();
  return summaryCountries;
};
