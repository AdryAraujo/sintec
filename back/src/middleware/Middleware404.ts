import { NextFunction } from "express";
import { ConnectionError, Sequelize, ValidationError } from "sequelize";
import { ApiError, BadRequestError, UnauthorizedError } from "../helper/apiErrros";
import {UniqueConstraintError}  from 'sequelize';


export function errorMiddleware404(erro: Error, req: Request, res: Response, next: NextFunction) {
  if (erro instanceof UniqueConstraintError) {
    throw new UnauthorizedError("Erro 401")
  } else if (erro instanceof ValidationError) {
    throw new BadRequestError("Erro 400")
  } else if (erro instanceof ConnectionError) {
	throw new ApiError("dddddddddd", 500)
  }
}
