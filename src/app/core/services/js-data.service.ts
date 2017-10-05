import { DataStore } from 'js-data';
import { LocalStorageAdapter} from 'js-data-localstorage'

import * as mappers from 'app/shared/js-data/mappers'

// Export all interfaces from this service

export const adapter = new LocalStorageAdapter();
export const store = new DataStore();
// "store" will now use the localstorage adapter for all async operations
store.registerAdapter('localstorage', adapter, {default: true});

// Register the mappers
store.defineMapper('order', mappers.orderMapper);
store.defineMapper('group', mappers.groupMapper);
store.defineMapper('beverage', mappers.beverageMapper);
