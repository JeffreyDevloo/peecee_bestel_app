import { Schema } from 'js-data';

export const groupSchema = new Schema({
  title: 'Group', // optional
  description: 'Schema for Group records', // optional
  type: 'object',
  properties: {
    id: { type: 'string', indexed: true },
    name: { type: 'string' }
  }
});
