import { Product } from '../../../../server/Models/product';

/**
 * Service function that makes a get request to
 * the api to get the inventory
 * @returns the body if no error occurred
 */
const getInventory = async (): Promise<Product[]> => {
  const response = await fetch('/inventory', { method: 'GET' });
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
  const response = await fetch('/inventory', { method: 'DELETE', body: JSON.stringify(id) });
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
  const response = await fetch('/inventory', { method: 'POST', body: JSON.stringify(product) });
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
  const response = await fetch('/addJewel', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
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
  const response = await fetch('/addComputer', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(computer)
  });
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(body.message);
  } else {
    return body;
  }
};
export { getInventory, addComputer, addJewelry, deleteProduct, editProduct };
