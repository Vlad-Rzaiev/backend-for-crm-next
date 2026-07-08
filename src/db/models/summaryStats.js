import { model, Schema } from 'mongoose';

const summaryStatsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    promotions: {
      type: Number,
      required: true,
    },

    categories: {
      type: Number,
      required: true,
    },

    newCompanies: {
      type: Number,
      required: true,
    },

    activeCompanies: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'summaryStats',
    timestamps: false,
    versionKey: false,
  },
);

export const SummaryStatsCollection = model('SummaryStat', summaryStatsSchema);
