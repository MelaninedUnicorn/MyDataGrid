import CsurfController from "./Controllers/csurf.controllers";
import ProductsController from "./Controllers/products.controllers";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import csrfRoutes from "./Routes/csrf.routes";
import express from "express";
import helmet from "helmet";
import loggerMiddleware from "./Middleware/logger.middleware";
import productsRoutes from "./Routes/products.routes";
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

app.use("/getCsrfToken", csrfRoutes);

app.use("/products", productsRoutes);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
