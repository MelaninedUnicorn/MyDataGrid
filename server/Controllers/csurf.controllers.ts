import { NextFunction, Request, Response } from "express";

/**
 * This controller gets and sends the csrf token then proceeds to executing
 * the next middleware if there's one
 * @param req
 * @param res
 * @param next
 */
const getCsrfToken = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	res.send({ csrfToken: req.csrfToken() });
	next();
};

export default {
	getCsrfToken,
};
