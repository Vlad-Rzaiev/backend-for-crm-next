import { model, Schema } from 'mongoose';

const categoriesSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'categories',
    timestamps: false,
    versionKey: false,
  },
);

export const CategoriesCollection = model('categories', categoriesSchema);
