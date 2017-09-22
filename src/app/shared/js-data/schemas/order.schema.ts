import { Schema } from 'js-data';

export const orderSchema = new Schema({
  title: 'Order', // optional
  description: 'Schema for Order records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true },
    // Only the DataStore component cares about the "indexed" attribute
    group_id: { type: 'string'},
  },
  required: ['name']
});
