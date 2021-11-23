import InventoryController from "./Controllers/inventory.controllers";
import express from "express";
import loggerMiddleware from "./Middleware/logger";

const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());

app.use(loggerMiddleware);

app.get('/inventory', InventoryController.getAllProducts);

app.delete('/inventory',InventoryController.deleteProduct);

app.post('/inventory');

app.post('/addComputer',InventoryController.addComputer);

app.post('/addJewel');

export default app;