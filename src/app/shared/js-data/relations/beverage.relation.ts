export const beverageRelation = {
  hasMany: {
    transaction: {  // Many beverages can be associated with different transactions, many to many without pivot
      foreignKeys: 'beverage_ids',  // Place the key onto transactions as fetching the transactions on a beverage will hardly ever be done
      localField: 'transactions',  // Keep a record of linked transactions (Done by querying all transactions in search of an id of the beverage)
    }
  }
};
