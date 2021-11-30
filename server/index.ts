import CsurfController from "./Controllers/csurf.controllers";
import InventoryController from "./Controllers/inventory.controllers";
import ProductsController from "./Controllers/products.controllers";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import express from "express";
import helmet from "helmet";
import loggerMiddleware from "./Middleware/logger.middleware";

const app = express();
const port = 5000;


/**
 * MIDDLEWARES
 */
app.use(express.json());

app.use(loggerMiddleware);

//  security middlewares

//information exposure
app.use(helmet());

// Cross-site  request forgery
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

const csrfMiddleware = csrf({
	cookie: {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
	},
});

app.use(csrfMiddleware);

/**
 * ROUTES
 */

app.get("/", (request, response) => {
	response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/getCsrfToken", CsurfController.getCsrfToken);

app.get("/products", ProductsController.getProducts);

app.get("/products/:id", ProductsController.getProductById);

app.post("/products", ProductsController.createProduct);

app.put("/products/:id", ProductsController.updateProduct);

app.delete("/products/:id", ProductsController.deleteProduct);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
