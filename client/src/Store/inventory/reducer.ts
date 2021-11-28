import { InventoryActionTypes, InventoryState } from './types';

import { Reducer } from 'redux';

const init: InventoryState = {
  data: [],
  error: undefined,
  loading: true
};

const reducer: Reducer<InventoryState> = (state = init, action) => {
  switch (action.type) {
    case InventoryActionTypes.GET_INVENTORY_REQUEST ||
      InventoryActionTypes.ADD_COMPUTER_REQUEST ||
      InventoryActionTypes.DELETE_PRODUCT_REQUEST ||
      InventoryActionTypes.ADD_JEWELRY_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.GET_INVENTORY_SUCCESS ||
      InventoryActionTypes.DELETE_PRODUCT_SUCCESS ||
      InventoryActionTypes.ADD_COMPUTER_SUCCESS ||
      InventoryActionTypes.ADD_JEWELRY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case InventoryActionTypes.GET_INVENTORY_FAILURE ||
      InventoryActionTypes.DELETE_PRODUCT_FAILURE ||
      InventoryActionTypes.ADD_COMPUTER_FAILURE ||
      InventoryActionTypes.ADD_JEWELRY_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

export { reducer as InventoryReducer };
