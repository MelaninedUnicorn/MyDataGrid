import { InventoryActionTypes, InventoryState } from './types';

import { Reducer } from 'redux';

const init: InventoryState = {
  data: [],
  error: undefined,
  loading: true
};

const reducer: Reducer<InventoryState> = (state = init, action) => {
  switch (action.type) {
    case InventoryActionTypes.GET_INVENTORY_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.GET_INVENTORY_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case InventoryActionTypes.GET_INVENTORY_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case InventoryActionTypes.DELETE_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.DELETE_PRODUCT_SUCCESS: {
      console.log('action payload', action.payload);
      return { ...state, loading: false };
    }
    case InventoryActionTypes.DELETE_PRODUCT_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as InventoryReducer };
