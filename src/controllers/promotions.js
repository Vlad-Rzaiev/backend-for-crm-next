import { getAllPromotions } from '../services/promotions.js';

export const getAllPromotionsController = async (req, res) => {
  const promotions = await getAllPromotions();

  res.status(200).json({
    status: 200,
    success: true,
    message: 'Successfully found promotions!',
    data: promotions,
  });
};
