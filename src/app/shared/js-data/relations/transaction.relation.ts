export const transactionRelation = {
  belongsTo: {  // An order can have multiple transactions but a transaction is linked to one order
    order: {
      foreignKey: 'order_id', // Map the order foreign key onto order_id of this object
      localField: 'order'
    },
    beverage: {  // A beverage can be linked to multiple transactions
      foreignKey: 'beverage_id',
      localField: 'beverage',
    }
  }
};
