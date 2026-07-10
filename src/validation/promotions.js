import Joi from 'joi';

export const createPromotionSchema = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Title should be a string',
    'string.min': 'Title should have at least {#limit} characters',
    'string.max': 'Title should have at most {#limit} characters',
    'any.required': 'Title is required!',
  }),
  description: Joi.string().min(3).max(90).required().messages({
    'string.base': 'Description should be a string',
    'string.min': 'Description should have at least {#limit} characters',
    'string.max': 'Description should have at most {#limit} characters',
    'any.required': 'Description is required!',
  }),
  discount: Joi.number().min(1).max(100).required().messages({
    'number.base': 'Discount should be a number',
    'number.min': 'Discount should have at least {#limit}',
    'number.max': 'Discount should have at most {#limit}',
    'any.required': 'Discount is required!',
  }),
  companyId: Joi.string().required().messages({
    'string.base': 'Company ID should be a string',
    'any.required': 'Company ID is required!',
  }),
  companyTitle: Joi.string().required().messages({
    'string.base': 'Company title should be a string',
    'any.required': 'Company title is required!',
  }),
  avatar: Joi.string().uri().allow('').optional().messages({
    'string.base': 'Avatar should be a string',
  }),
}).unknown(false);
