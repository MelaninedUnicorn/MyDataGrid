import { NextFunction, Request, Response } from "express";

/**
 * This controller sets and sends the csrf token then proceeds to executing 
 * the next middleware
 * @param req 
 * @param res 
 * @param next 
 */
const getCsrfToken = (req: Request, res: Response, next: NextFunction): void => {
    res.send({ csrfToken: req.csrfToken() });
    next();

}

export default {
    getCsrfToken
};