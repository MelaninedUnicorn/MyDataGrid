import InventoryController from "./Controllers/inventory.controllers";
import express from "express" ;
import loggerMiddleware from "./Middleware/logger";

const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(loggerMiddleware);
// create a GET route
app.get('/inventory',InventoryController.getAllProducts); 

export default app;