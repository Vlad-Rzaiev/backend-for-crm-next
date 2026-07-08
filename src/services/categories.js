import { CategoriesCollection } from '../db/models/categories.js';

export const getAllCategories = async () => {
  const categories = await CategoriesCollection.find();
  return categories;
};
