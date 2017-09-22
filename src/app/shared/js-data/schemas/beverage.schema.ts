import { Schema } from 'js-data';

export const beverageSchema = new Schema({
  title: 'Beverage', // optional
  description: 'Schema for Beverage records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true},
    name: { type: 'string' }
  }
});
