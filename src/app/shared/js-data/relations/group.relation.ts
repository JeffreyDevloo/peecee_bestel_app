export const groupRelation = {
  hasMany: {
    order: {
      // Since relationship information is stored
      // on the order, in order to retrieve a
      // order's groups we have to do a O(n^2)
      // search through all the player instances
      foreignKeys: 'group_ids',
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'orders',
    }
  }
};
