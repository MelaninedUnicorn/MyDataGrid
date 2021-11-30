import { Request, Response } from "express";

import pool from "../Database";

const getProducts = (request: Request, response: Response) => {
	pool.query("SELECT * FROM products ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getProductById = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);

	pool.query("SELECT * FROM products WHERE id = $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const createProduct = (request: Request, response: Response) => {
	const { title, description, price, category } = request.body;

	pool.query(
		"INSERT INTO products (title,description,price,category) VALUES ($1, $2,$3,$4)",
		[title, description, price, category],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(201).send(`Product added with ID: ${results}`);
		}
	);
};

const updateProduct = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);
	const { title, description, price, category } = request.body;

	pool.query(
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

const deleteProduct = (request: Request, response: Response) => {
	const id = parseInt(request.params.id);

	pool.query("DELETE FROM products WHERE id = $1", [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`Product deleted with ID: ${id}`);
	});
};

export default {
    getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
