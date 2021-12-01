import CsurfController from "../Controllers/csurf.controllers";
import express from "express";

const router = express.Router();

router.get("/getCsrfToken", CsurfController.getCsrfToken);

export default router;
