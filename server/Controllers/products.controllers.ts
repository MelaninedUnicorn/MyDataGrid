import { Request, Response } from "express";

import { query } from "../Database/db.config";

/**
 * This controller gets all the entries from the products table
 * sorted by id by ascending order
 * @param request
 * @param response
 */
const getProducts = (request: Request, response: Response) => {
	query("SELECT * FROM products ORDER BY id ASC", [], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

/**
 * This controller/query uses the limit/offset method for pagination
 * @param request (the limit offset sortField and order are passed on ass parameters)
 * @param response
 */
const getProductsPage = (request: Request, response: Response) => {
	const { limit, page, sortField, order } = request.params;

	let pageDetails = {
		currentPage: page,
		order,
		sortField,
		limit,
		products: [{}],
		total: 0,
	};

	const wantedIndex = parseInt(limit) * (parseInt(page) - 1);

	query(
		`SELECT * FROM products ORDER BY ${sortField} ${order} OFFSET ${wantedIndex} LIMIT ${limit}`,
		[],
		(error, results) => {
			if (error) {
				throw error;
			}
			pageDetails.products = results.rows;
			query("SELECT count(*) FROM products", [], (error, results) => {
				pageDetails.total = results.rows[0].count;
				if (error) {
					throw error;
				}
				response.status(200).json(pageDetails);
			});
		}
	);
};

/**
 *
 * @param request This controller gets a product object by id
 * @param response
 */
const getProductById = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);

	query("SELECT * FROM products WHERE id = $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

/**
 * This controller add a new product entry to the products table
 * @param request
 * @param response
 */
const createProduct = (request: Request, response: Response) => {
	const { title, description, price, category } = request.body;

	query(
		"INSERT INTO products (title,description,price,category) VALUES ($1, $2,$3,$4)",
		[title, description, price, category],
		(error, results) => {
			if (error) {
				throw error;
			}

			response.status(201);
		}
	);
};

/**
 * This controller updates a product entry to the products table
 * @param request
 * @param response
 */
const updateProduct = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);
	const { title, description, price, category } = request.body;

	query(
		"UPDATE products SET title = $1, description = $2, price = $3, category = $4 WHERE id = $5",
		[title, description, price, category, id],
		(error, _results) => {
			if (error) {
				throw error;
			}
			response.status(200).send(`Product modified with ID: ${id}`);
		}
	);
};
/**
 * This controller deletes a product from the products table
 * @param request
 * @param response
 */
const deleteProduct = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);

	query("DELETE FROM products WHERE id = $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200);
	});
};

export default {
	getProducts,
	getProductsPage,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
