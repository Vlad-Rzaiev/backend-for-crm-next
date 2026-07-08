import { model, Schema } from 'mongoose';

const summaryCountriesSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    countryId: {
      type: String,
      required: true,
    },

    countryTitle: {
      type: String,
      required: true,
    },

    count: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'summaryCountries',
    timestamps: false,
    versionKey: false,
  },
);

export const SummaryCountriesCollection = model(
  'SummaryCountry',
  summaryCountriesSchema,
);
