export class GroupListConfig {
  type = 'all';

  filters: {
    name?: string,
    id?: string,
    limit?: number,
    offset?: number
  } = {};
}
