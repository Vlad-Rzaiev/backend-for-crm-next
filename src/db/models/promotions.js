import { model, Schema } from 'mongoose';

const promotionsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    discount: {
      type: Number,
      required: true,
    },

    companyId: {
      type: String,
      required: true,
    },

    companyTitle: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'promotions',
    timestamps: false,
    versionKey: false,
  },
);

export const PromotionsCollection = model('promotions', promotionsSchema);
