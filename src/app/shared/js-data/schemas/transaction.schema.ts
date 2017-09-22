import { Schema } from 'js-data';

export const transactionSchema = new Schema({
  title: 'Beverage', // optional
  description: 'Schema for Beverage records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true},
    amount: { type: 'string' },
    beverage_ids : {type: 'array', items: 'string'},  // Beverages need to be linked before saving
    order_id: {type: 'string'}  // An order must exist before saving the transaction
  },
  required: ['name', 'beverage_ids', 'order_id']
});
