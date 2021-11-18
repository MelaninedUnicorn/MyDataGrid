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
   * 
   * @returns the Product specifications as a readable string
   */
  getSpecs(): string {
    let { title, description, price, category, ...specifications } = this;
    const { startCase } = lodash;
    console.log(specifications);
    let specsToString = "";
    for (const [key, value] of Object.entries(specifications)) {
      specsToString += `${startCase(key)}: ${value}\n`;
    }
    return specsToString;
  }
  /**
   * Saves the current instance to the inventory
   */
  save(): void {

    getProductsFromFile((products) => {

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
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

