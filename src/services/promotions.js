import { PromotionsCollection } from '../db/models/promotions.js';

export const getAllPromotions = async () => {
  const promotions = await PromotionsCollection.find();
  return promotions;
};
