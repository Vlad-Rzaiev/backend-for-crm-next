import { model, Schema } from 'mongoose';

const summaryCategoriesSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    categoryId: {
      type: String,
      required: true,
    },

    categoryTitle: {
      type: String,
      required: true,
    },

    count: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'summaryCategories',
    timestamps: false,
    versionKey: false,
  },
);

export const SummaryCategoriesCollection = model(
  'SummaryCategory',
  summaryCategoriesSchema,
);
