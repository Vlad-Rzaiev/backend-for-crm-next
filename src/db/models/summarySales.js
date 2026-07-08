import { model, Schema } from 'mongoose';

const summarySalesSchema = new Schema(
  {
    id: {
      type: String,
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

    sold: {
      type: Number,
      required: true,
    },

    income: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'summarySales',
    timestamps: false,
    versionKey: false,
  },
);

export const SummarySalesCollection = model('summarySales', summarySalesSchema);
