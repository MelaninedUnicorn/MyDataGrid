import { Request, Response } from "express";

import { Product } from '../Models/product';

/**
 * This controller fetches all the products found in the inventory file.
 * @param req 
 * @param res 
 */
const getAllProducts = (req: Request, res: Response) => {
    Product.fetchAll((products) => { res.status(200).send({inventory: products }); });
}


export default {
    getAllProducts
};
