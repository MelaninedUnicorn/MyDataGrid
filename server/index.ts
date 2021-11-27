import CsurfController from './Controllers/csurf.controllers';
import InventoryController from "./Controllers/inventory.controllers";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import express from "express";
import helmet from 'helmet';
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

app.use(helmet());

app.use(cookieParser())
const csrfProtection = csrf({ cookie: { httpOnly: true, }})

app.use(csrfProtection);

/** 
* ROUTES
*/

app.get('/inventory', InventoryController.getAllProducts);

app.delete('/inventory', InventoryController.deleteProduct);

app.post('/addComputer', InventoryController.addComputer);

app.post('/addJewel', InventoryController.addJewelry);

app.all('*',CsurfController.getCsrfToken);

export default app;