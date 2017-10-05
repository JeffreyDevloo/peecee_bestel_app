export class ListQueryConfig {
  type = 'all';

  filters: {
    name?: string,
    id?: string,
    limit?: number,
    offset?: number
  } = {};
}
