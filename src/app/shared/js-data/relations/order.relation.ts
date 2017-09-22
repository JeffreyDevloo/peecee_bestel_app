export const orderRelation = {
  hasMany: {
    group: {
      // Option means that the parent record has a field whose value
      // is an array of the primary keys of the parent's child records.
      localKeys: 'group_ids',
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'groups',
    },
    beverage: {
      // Option means that the parent record has a field whose value
      // is an array of the primary keys of the parent's child records.
      localKeys: 'beverage_ids',
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'beverages',
    }
  }
};
