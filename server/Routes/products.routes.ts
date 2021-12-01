import ProductsController from "../Controllers/products.controllers";
import express from "express";

const router = express.Router();

/*
 * This routes fetches all the products in the products table and sorts them by id in ascending order
 */
router.get("/", ProductsController.getProducts);
/*
 * This route fetches a "page" of the products table using the passed on params to return a sorted page
 */
router.get(
	"/page/:limit/:page/:sortField/:order",
	ProductsController.getProductsPage
);
/*
 * This route fetches a product by its id
 */
router.get("/:id", ProductsController.getProductById);
/*
 * This route add a product entry to the products table
 */
router.post("/", ProductsController.createProduct);
/*
 * This route updates an existing entry to the products table
 */
router.put("/:id", ProductsController.updateProduct);
/*
 * This route deletes an existing entry from the products table
 */
router.delete("/:id", ProductsController.deleteProduct);

export default router;
