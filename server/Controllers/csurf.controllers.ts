import { NextFunction, Request, Response } from "express";

const getCsrfToken = (req: Request, res: Response, next: NextFunction): void => {
    res.send({csrfToken: req.csrfToken() });
    next();

}

export default {
    getCsrfToken
};