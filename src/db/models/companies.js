import { model, Schema } from 'mongoose';

const companiesSchema = new Schema(
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

    status: {
      type: String,
      required: true,
      enum: ['active', 'notActive', 'pending', 'suspended'],
    },

    joinedDate: {
      type: Date,
      required: true,
    },

    hasPromotions: {
      type: Boolean,
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

    countryId: {
      type: String,
      required: true,
    },

    countryTitle: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'companies',
    timestamps: false,
    versionKey: false,
  },
);

export const CompaniesCollection = model('companies', companiesSchema);
