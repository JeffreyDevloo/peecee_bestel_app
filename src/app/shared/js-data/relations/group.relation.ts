export const groupRelation = {
  hasMany: {
    order: {  // A group can have multiple orders
      foreignKey: 'group_id', // Place a key group_id onto order to map it
      // In memory, a user's posts will be attached to
      // user objects via the user's "posts" property,
      // i.e. console.log(user.posts); // [{...}, {...}, ...]
      localField: 'orders',
    }
  }
};
