import { CounterCollection } from '../db/models/counts.js';
import { PromotionsCollection } from '../db/models/promotions.js';

export const getAllPromotions = async () => {
  const promotions = await PromotionsCollection.find();
  return promotions;
};

export const createPromotion = async (payload) => {
  const counter = await CounterCollection.findOneAndUpdate(
    { name: 'promotions' },
    { $inc: { value: 1 } },
    { new: true, upsert: true },
  );

  const promotion = await PromotionsCollection.create({
    id: String(counter.value),
    ...payload,
  });

  return promotion;
};
