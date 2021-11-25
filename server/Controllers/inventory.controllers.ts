import { Request, Response } from "express";

import { Computer } from "../Models/computer";
import { Jewelry } from "../Models/jewelry";
import { Product } from '../Models/product';

/**
 * This controller fetches all the products found in the inventory file.
 * @param req 
 * @param res 
 */
const getAllProducts = (req: Request, res: Response): void => {
    Product.fetchAll((products) => { res.status(200).send({ inventory: products }); });
}

const deleteProduct = (req: Request, res: Response): void => {
    try {
        Product.delete(req.body);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }

}

const addComputer = (req: Request, res: Response): void => {
    const { title, description, price, brand, year, keyboardLayout } = req.body;
    try {
        const newCpu = new Computer(title, description, price, brand, year, keyboardLayout);
        newCpu.save();
        res.status(200).send({ id: newCpu.id });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }

}
const addJewelry = (req: Request, res: Response): void => {
    const { title, description, price, type, material } = req.body;
    try {
        const newJewel = new Jewelry(title, description, price, type, material);
        newJewel.save();
        res.status(200).send({ id: newJewel.id });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }

}
export default {
    getAllProducts,
    deleteProduct,
    addComputer,
    addJewelry
};
