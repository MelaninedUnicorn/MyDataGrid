/* eslint-disable prettier/prettier */
import { Product } from '../../../../server/Models/product';
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
const getInventory = async (): Promise<Product[]> => {
  const response = await fetch(`${domainUrl}/inventory`, {
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
    return body.inventory;
  }
};

/**
 * Service function that makes a delete request to
 * the api to delete a product in the inventory
 * @param id
 */
const deleteProduct = async (id: string): Promise<any> => {
  const response = await fetch(`${domainUrl}/inventory`, {
    method: 'DELETE',
    body: JSON.stringify(id),
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
 * the api to update a product in the inventory
 * @param product
 */
const editProduct = async (product: Product): Promise<any> => {
  const response = await fetch(`${domainUrl}/inventory`, {
    method: 'POST',
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
 * the api to add a new product of type jewel to the inventory
 * @param jewel
 */
const addJewelry = async (jewel: {
  title: string;
  description: string;
  price: number;
  type: string;
  material: string;
}): Promise<any> => {
  const response = await fetch(`${domainUrl}/addJewel`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(jewel)
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
 * the api to add a new product of type computer to the inventory
 * @param computer
 */
const addComputer = async (computer: {
  title: string;
  description: string;
  price: number;
  brand: string;
  year: string;
  keyboardLayout: 'qwerty' | 'azerty';
}): Promise<any> => {
  const response = await fetch(`${domainUrl}/addComputer`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xsrf-token': cookie.load('csrfToken')
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(computer)
  });
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(body.message);
  } else {
    return body;
  }
};
export { getInventory, addComputer, addJewelry, deleteProduct, editProduct, setCsrfToken };
