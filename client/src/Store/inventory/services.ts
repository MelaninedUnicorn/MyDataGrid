/* eslint-disable prettier/prettier */
import { Product } from './types';
import cookie from 'react-cookies';
const domainUrl = 'http://localhost:5000';

/**
 * Service function to get the csrf token and set it as a cookie
 */
const setCsrfToken = async () => {
  let fetchCsrfResponse = await fetch(`${domainUrl}/getCsrfToken`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  });
  let body = await fetchCsrfResponse.json();
  cookie.save('csrfToken', body.csrfToken, {});
};

/**
 * Service function that makes a get request to
 * the api to get the inventory
 * @returns the body if no error occurred
 */
const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${domainUrl}/products`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors'
  });
  const body = await response.json();
  if (response.status !== 200) {
    throw new Error(body.message);
  } else {
    return body;
  }
};

/**
 * Service function that makes a delete request to
 * the api to delete a product in the inventory
 * @param id
 */
const deleteProduct = async (id: string): Promise<any> => {
  const response = await fetch(`${domainUrl}/products/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors'
  });
  const body = await response.json();
  if (response.status !== 200) {
    throw new Error(body.message);
  } else {
    return;
  }
};

/**
 * Service function that makes a post request to
 * the api to update a product in the inventory
 * @param product
 */
const updateProduct = async (product: Product): Promise<any> => {
  const response = await fetch(`${domainUrl}/products/${product.id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors'
  });
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(body.message);
  } else {
    return body;
  }
};

/**
 * Service function that makes a post request to
 * the api to add a new product to the inventory
 * @param product
 */
const addProduct = async (product: {
  title: string;
  description: string;
  price: number;
  category: string;
}): Promise<any> => {
  const response = await fetch(`${domainUrl}/products`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(product)
  });
  const body = await response.json();
  console.log('body', body);
  if (response.status !== 201) {
    throw new Error(body.message);
  } else {
    console.log(body);
    return;
  }
};
export { getProducts, addProduct, deleteProduct, updateProduct, setCsrfToken };
