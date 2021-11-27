import { applyMiddleware, combineReducers, createStore } from 'redux';

import { InventoryReducer } from './inventory/reducer';
import { InventoryState } from './inventory/types';
import thunk from 'redux-thunk';

export interface ApplicationState {
  inventory: InventoryState;
}
const store = createStore(
  combineReducers({
    inventory: InventoryReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
