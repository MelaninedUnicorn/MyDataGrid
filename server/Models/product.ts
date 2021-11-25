/** Your class description */
import fs from "fs";
import lodash from 'lodash';
import path from "path";
import { uid } from '../Utils/uid';

const p = path.join(
  path.dirname(require.main?.filename || ""),
  "data",
  "inventory.json"

);

/**
 * Gets the product array from the file and passes it in the callback function
 * 
 * @param cb callback function that handles the array of product
 */

const getProductsFromFile = (cb: (products: Product[]) => void): void => {

  fs.readFile(p, "utf8", (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};



export abstract class Product {

  readonly id: string = uid();
  title: string;
  description: string;
  price: number;
  category: string;


  constructor(title: string, description: string, price: number) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = this.constructor.name;


  }

  /**
   * Saves the current instance to the inventory
   */
  save(): void {

    getProductsFromFile((products: Product[]) => {


      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          throw new Error(err.message);

        }
      });
    });
  }

  /**
 * 
 * @returns the Product specifications as a readable string
 */
  static getSpecs(product: Product): string {
    let { title, description, price, category, ...specifications } = product;
    const { startCase } = lodash;
   
    let specsToString = "";
    for (const [key, value] of Object.entries(specifications)) {
      specsToString += `${startCase(key)}: ${value}\n`;
    }
    return specsToString;
  }

  /**
   * Method that updates a product from the inventory
   * @param newProduct 
   */
  static edit(newProduct: Product): void {
    getProductsFromFile((products: Product[]) => {

      const productIndex = products.findIndex((product: Product) => product.id === newProduct.id);

      products[productIndex] = newProduct;

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          throw new Error(err.message);
        }
      });
    });
  }

  /**
   * Method that deletes a product from the inventory by using the id
   * @param id 
   */
  static delete(id: string): void {
    getProductsFromFile((products: Product[]) => {

      products = products.filter(function (product: Product) {
        return product.id !== id;
      });

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          throw new Error(err.message);
        }
      });
    });

  }
  /**
   * Method that calls the helper function getProductFromFile 
   * @param cb callback function that handles the result of the fetchAll function call
   */
  static fetchAll(cb: (products: Product[]) => void): void {
    getProductsFromFile(cb);
  }

}

