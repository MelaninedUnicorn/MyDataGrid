/* eslint-disable no-unused-vars */
export interface Product {
  readonly id?: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

export type GetPage = {
  limit: number;
  page: number;
  sortField: string;
  order: 'ASC' | 'DESC';
};

export type InventoryState = {
  readonly loading: boolean;
  readonly data: Product[];
  readonly currentPage: number;
  readonly order: 'ASC' | 'DESC';
  readonly sortField: string;
  readonly total: number;
  readonly error?: string;
};

export enum InventoryActionTypes {
  GET_INVENTORY_REQUEST = '@@inventory/GET_INVENTORY_REQUEST',
  GET_INVENTORY_SUCCESS = '@@inventory/GET_INVENTORY_SUCCESS',
  GET_INVENTORY_FAILURE = '@@inventory/GET_INVENTORY_FAILURE',
  DELETE_PRODUCT_REQUEST = '@@inventory/DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS = '@@inventory/DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAILURE = '@@inventory/DELETE_PRODUCT_FAILURE',
  ADD_PRODUCT_REQUEST = '@@inventory/ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS = '@@inventory/ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAILURE = '@@inventory/ADD_PRODUCT_FAILURE',
  UPDATE_PRODUCT_REQUEST = '@@inventory/UPDATE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_SUCCESS = '@@inventory/UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_FAILURE = '@@inventory/UPDATE_PRODUCT_FAILURE'
}
