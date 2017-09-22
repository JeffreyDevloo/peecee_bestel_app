import { Schema } from 'js-data';

export const orderSchema = new Schema({
  title: 'Order', // optional
  description: 'Schema for Order records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true },
    name: { type: 'string' },
    // Only the DataStore component cares about the "indexed" attribute
    group_ids: { type: 'array', items: {type: 'string'}},
    beverage_ids: { type: 'array', items: {type: 'string'}}
  }
});
