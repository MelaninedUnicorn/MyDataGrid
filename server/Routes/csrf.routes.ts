import CsurfController from "../Controllers/csurf.controllers";
import express from "express";

const router = express.Router();

/**
 * This route gets the csrf token and returns it to the client
 * so they are authorized to make queries to the server
 */
router.get("/", CsurfController.getCsrfToken);

export default router;
