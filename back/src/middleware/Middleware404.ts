import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../helper/apiErrros'

export const errorMiddleware404 = (
	error: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = error.statusCode ?? 400
	const message = error.statusCode ? error.message : 'lslslsls'
	return res.status(statusCode).json({ message })
}