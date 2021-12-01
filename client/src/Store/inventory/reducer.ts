import { InventoryActionTypes, InventoryState } from './types';

import { Reducer } from 'redux';

const init: InventoryState = {
  data: [],
  error: undefined,
  loading: false,
  order: 'ASC',
  sortField: 'id',
  currentPage: 1,
  limit: 10,
  total: 0
};

const reducer: Reducer<InventoryState> = (state = init, action) => {
  switch (action.type) {
    case InventoryActionTypes.GET_INVENTORY_REQUEST ||
      InventoryActionTypes.ADD_PRODUCT_REQUEST ||
      InventoryActionTypes.DELETE_PRODUCT_REQUEST ||
      InventoryActionTypes.UPDATE_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.GET_INVENTORY_SUCCESS: {
      const { products, currentPage, total, order, sortField, limit } = action.payload;
      return {
        ...state,
        loading: false,
        data: products,
        currentPage: parseInt(currentPage),
        sortField,
        limit: parseInt(limit),
        order,
        total: parseInt(total)
      };
    }
    case InventoryActionTypes.DELETE_PRODUCT_SUCCESS ||
      InventoryActionTypes.ADD_PRODUCT_SUCCESS ||
      InventoryActionTypes.UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case InventoryActionTypes.GET_INVENTORY_FAILURE ||
      InventoryActionTypes.DELETE_PRODUCT_FAILURE ||
      InventoryActionTypes.ADD_PRODUCT_FAILURE ||
      InventoryActionTypes.UPDATE_PRODUCT_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

export { reducer as InventoryReducer };
