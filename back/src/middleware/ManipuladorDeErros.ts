import { NextFunction, Request, Response } from 'express'
import { ApiError, BadRequestError, UnauthorizedError } from '../helper/apiErrros'
import { ConnectionError, Sequelize, UniqueConstraintError, ValidationError } from 'sequelize'

export const errorMiddleware = (
	erro: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (erro instanceof UniqueConstraintError) {
		throw new UnauthorizedError("Erro 401")
	  } else if (erro instanceof ValidationError) {
		throw new BadRequestError("Erro 400")
	  } else if (erro instanceof ConnectionError) {
		throw new ApiError("dddddddddd", 500)
	  }
}
// 	const statuscode = error.status();
// 	if(statusCode == 400){
// 		const message = error.statusCode ? error.message : 'Erro Interno do Servidor'
// 		return res.status(statusCode).json({ message })
// 	}else{
// 		console.log("deu ruim")
// 		console.log(error)
// 		res.status(400).send(error);
// 	}
// }

