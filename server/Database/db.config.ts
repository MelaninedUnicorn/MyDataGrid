import { Pool, PoolClient } from "pg";

import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.POSTGRES_URI;

const pool = new Pool({
	connectionString,
	ssl: {
		rejectUnauthorized: false,
	},
});

/**
 * This function will ensure that every query made to postgres on the server will be logged
 * @param text
 * @param params
 * @param callback
 * @returns
 */

export const query = (
	text: string,
	params: any,
	callback: (err: Error, res: any) => void
) => {
	const start = Date.now();
	return pool.query(text, params, (err, res) => {
		const duration = Date.now() - start;
		console.log("executed query", {
			text,
			duration,
			rows: res && res.rowCount,
			error: err ? err.message : "none",
		});
		callback(err, res);
	});
};
