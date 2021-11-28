import CsurfController from "./Controllers/csurf.controllers";
import InventoryController from "./Controllers/inventory.controllers";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import express from "express";
import helmet from "helmet";
import loggerMiddleware from "./Middleware/logger";

const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

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

app.get("/getCsrfToken", CsurfController.getCsrfToken);

app.get("/inventory", InventoryController.getAllProducts);

app.delete("/inventory", InventoryController.deleteProduct);

app.post("/addComputer", InventoryController.addComputer);

app.post("/addJewel", InventoryController.addJewelry);

export default app;
