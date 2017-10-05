export const beverageRelation = {
  hasMany: {
    transaction: {  // A beverage can be associated with different transactions
      foreignKey: 'beverage_id',  // Place the key onto transactions as fetching the transactions on a beverage will hardly ever be done
      localField: 'transactions',  // Keep a record of linked transactions (Done by querying all transactions in search of an id of the beverage)
    }
  }
};
