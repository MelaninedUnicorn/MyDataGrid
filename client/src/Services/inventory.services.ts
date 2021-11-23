/**
 * Function that makes a get request to 
 * the api to get the inventory
 * @returns the body if no error occurred
 */
const getInventory = async ():Promise<any> =>{
    const response = await fetch('/inventory');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
} 
export {
  getInventory
};