import { Action, ActionCreator, Dispatch } from 'redux';
import { GetPage, InventoryActionTypes, Product } from './types';
import { addProduct, deleteProduct, getProductsPage, updateProduct } from './services';

import { ApplicationState } from '../index';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<object>>>;

export const fetchInventoryRequest: AppThunk = (fetchDetails: GetPage) => {
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.GET_INVENTORY_REQUEST
      });
      getProductsPage(fetchDetails)
        .then((response) =>
          dispatch({
            type: InventoryActionTypes.GET_INVENTORY_SUCCESS,
            payload: response
          })
        )
        .catch((e) =>
          dispatch({
            type: InventoryActionTypes.GET_INVENTORY_FAILURE,
            payload: e.message
          })
        );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.GET_INVENTORY_FAILURE,
        payload: e.message
      });
    }
  };
};

export const deleteProductRequest: AppThunk = (id: string) => {
  return async (dispatch: Dispatch): Promise<Action | undefined> => {
    try {
      dispatch({
        type: InventoryActionTypes.DELETE_PRODUCT_REQUEST
      });
      deleteProduct(id)
        .then(() => {
          dispatch({
            type: InventoryActionTypes.DELETE_PRODUCT_SUCCESS
          });
        })
        .catch((e) =>
          dispatch({
            type: InventoryActionTypes.DELETE_PRODUCT_FAILURE,
            payload: e.message
          })
        );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.DELETE_PRODUCT_FAILURE,
        payload: e.message
      });
    }
  };
};

export const addProductRequest: AppThunk = (product: Product) => {
  return async (dispatch: Dispatch): Promise<Action | undefined> => {
    try {
      dispatch({
        type: InventoryActionTypes.ADD_PRODUCT_REQUEST
      });
      addProduct(product)
        .then(() => {
          dispatch({
            type: InventoryActionTypes.ADD_PRODUCT_SUCCESS
          });
        })
        .catch((e) =>
          dispatch({
            type: InventoryActionTypes.ADD_PRODUCT_FAILURE,
            payload: e.message
          })
        );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.ADD_PRODUCT_FAILURE,
        payload: e.message
      });
    }
  };
};

export const updateProductRequest: AppThunk = (product: Product) => {
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.UPDATE_PRODUCT_REQUEST
      });
      updateProduct(product)
        .then(() =>
          dispatch({
            type: InventoryActionTypes.UPDATE_PRODUCT_SUCCESS
          })
        )
        .catch((e) =>
          dispatch({
            type: InventoryActionTypes.UPDATE_PRODUCT_FAILURE,
            payload: e.message
          })
        );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.UPDATE_PRODUCT_FAILURE,
        payload: e.message
      });
    }
  };
};
