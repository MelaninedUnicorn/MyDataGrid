import { NextFunction, Request, Response } from "express";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
	console.log(
		"Request logged:",
		req.method,
		req.path,
		"body",
		req.body,
		"params",
		req.params
	);
	next();
};

export default loggerMiddleware;
