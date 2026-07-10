import { createPromotion, getAllPromotions } from '../services/promotions.js';

export const getAllPromotionsController = async (req, res) => {
  const promotions = await getAllPromotions();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found promotions!',
    data: promotions,
  });
};

export const createPromotionController = async (req, res) => {
  const promotion = await createPromotion(req.body);

  res.status(201).json({
    status: 201,
    success: true,
    message: 'Successfully created promotion!',
    data: promotion,
  });
};
