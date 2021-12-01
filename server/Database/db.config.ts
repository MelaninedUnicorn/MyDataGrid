import { Pool } from "pg";

const pool = new Pool({
	user: "pyaoiwokrmharm",
	host: "ec2-176-34-105-15.eu-west-1.compute.amazonaws.com",
	database: "d36ubjpia1ldn1",
	password: "5fb6af2830fe96942ab9a89ddfcf307b68c52ab52bf35dbe074c6801b150e0bc",
	port: 5432,
	ssl: {
		rejectUnauthorized: false,
	},
});

export default pool;
