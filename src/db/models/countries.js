import { model, Schema } from 'mongoose';

const countriesSchema = new Schema(
  {
    countryId: {
      type: Number,
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
    timestamps: true,
    versionKey: false,
  },
);

export const CountriesCollection = model('countries', countriesSchema);
