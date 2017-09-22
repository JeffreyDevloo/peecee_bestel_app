export const transactionRelation = {
  hasMany: {
    beverage: {  // Multiple beverages can be linked to multiple tranactions, this is a many to many
      // In a hasMany relationship configured with
      // a foreignKey, the foreignKey specifies the
      // property of the child record that points
      // to the parent record,
      localKeys: 'beverage_ids',
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'beverages',
    }
  },
  belongsTo: {  // An order can have multiple transactions but a transaction is linked to one order
    order: {
      foreignKey: 'order_id', // Map the order foreign key onto order_id of this object
      localField: 'order'
    }
  }
};
