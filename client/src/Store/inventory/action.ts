import { Action, ActionCreator, Dispatch } from 'redux';
import { Computer, InventoryActionTypes, Jewelry } from './types';
import { addComputer, addJewelry, deleteProduct, getInventory } from './services';

import { ApplicationState } from '../index';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<object>>>;

export const fetchInventoryRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.GET_INVENTORY_REQUEST
      });
      getInventory().then((response) =>
        dispatch({
          type: InventoryActionTypes.GET_INVENTORY_SUCCESS,
          payload: response
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
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.DELETE_PRODUCT_REQUEST
      });
      deleteProduct(id).then(() =>
        dispatch({
          type: InventoryActionTypes.DELETE_PRODUCT_SUCCESS
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

export const addComputerRequest: AppThunk = (computer: Computer) => {
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.ADD_COMPUTER_REQUEST
      });
      addComputer(computer).then(() =>
        dispatch({
          type: InventoryActionTypes.ADD_COMPUTER_SUCCESS
        })
      );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.ADD_COMPUTER_FAILURE,
        payload: e.message
      });
    }
  };
};

export const addJewelryRequest: AppThunk = (jewel: Jewelry) => {
  return (dispatch: Dispatch): Action | undefined => {
    try {
      dispatch({
        type: InventoryActionTypes.ADD_JEWELRY_REQUEST
      });
      addJewelry(jewel).then(() =>
        dispatch({
          type: InventoryActionTypes.ADD_JEWELRY_SUCCESS
        })
      );
    } catch (e: any) {
      return dispatch({
        type: InventoryActionTypes.ADD_JEWELRY_FAILURE,
        payload: e.message
      });
    }
  };
};
