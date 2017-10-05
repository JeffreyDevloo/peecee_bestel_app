import { Schema } from 'js-data';

export const transactionSchema = new Schema({
  title: 'Beverage', // optional
  description: 'Schema for Beverage records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true},
    amount: { type: 'number' },
    beverage_id : {type: 'string'},  // Beverage need to be linked before saving
    order_id: {type: 'string'}  // An order must exist before saving the transaction
  },
  required: ['amount', 'beverage_id', 'order_id']
});
