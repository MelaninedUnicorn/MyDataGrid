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