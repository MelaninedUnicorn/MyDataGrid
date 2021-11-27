/* eslint-disable no-unused-vars */
export interface Product {
  readonly id: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

export interface Computer extends Product {
  brand: string;
  year: string;
  keyboardLayout: 'azerty' | 'qwerty';
}

export interface Jewelry extends Product {
  type: string;
  material: string;
}

export type InventoryState = {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error?: string;
  fetchInventoryRequest?: () => {};
  deleteProductRequest?: () => {};
};

export enum InventoryActionTypes {
  GET_INVENTORY_REQUEST = '@@inventory/GET_INVENTORY_REQUEST',
  GET_INVENTORY_SUCCESS = '@@inventory/GET_INVENTORY_SUCCESS',
  GET_INVENTORY_FAILURE = '@@inventory/GET_INVENTORY_FAILURE',
  DELETE_PRODUCT_REQUEST = '@@inventory/DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS = '@@inventory/DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAILURE = '@@inventory/DELETE_PRODUCT_FAILURE'
}
