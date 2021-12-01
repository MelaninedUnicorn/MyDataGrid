import ProductsController from "../Controllers/products.controllers";
import express from "express";

const router = express.Router();

router.get("/products", ProductsController.getProducts);

router.get("/products/:id", ProductsController.getProductById);

router.post("/products", ProductsController.createProduct);

router.put("/products/:id", ProductsController.updateProduct);

router.delete("/products/:id", ProductsController.deleteProduct);

export default router;
