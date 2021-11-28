import { applyMiddleware, combineReducers, createStore } from 'redux';

import { InventoryReducer } from './inventory/reducer';
import { InventoryState } from './inventory/types';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export interface ApplicationState {
  inventory: InventoryState;
}

// const middlewares = [thunk];
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

const store = createStore(
  combineReducers({
    inventory: InventoryReducer
  }),
  applyMiddleware(thunk, logger)
);

export default store;
