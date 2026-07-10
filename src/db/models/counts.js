import { model, Schema } from 'mongoose';

const counterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  },
);

export const CounterCollection = model('counters', counterSchema);
