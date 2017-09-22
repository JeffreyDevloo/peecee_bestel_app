export const orderRelation = {
  belongsTo: { // Optional relation, a group can have multiple orders but an order is only linked to one group
    group: {
      foreignKey: 'group_id', // Map the groups foreign key to a group_id on this object
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'group',
    },
  },
  hasMany: {  // An order can have multiple transactions but a transaction is linked to one order
    transaction: {
      foreignKey: 'order_id', // Place a foreign key on transaction
      localField: 'transactions'
    }
  }
};
