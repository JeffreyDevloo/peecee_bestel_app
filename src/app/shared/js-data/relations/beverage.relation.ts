export const beverageRelation = {
  hasMany: {
    order: {
      // In a hasMany relationship configured with
      // a foreignKey, the foreignKey specifies the
      // property of the child record that points
      // to the parent record,
      foreignKeys: 'beverage_ids',
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'orders',
    }
  }
};
