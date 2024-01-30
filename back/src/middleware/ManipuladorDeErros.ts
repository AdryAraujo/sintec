import { Sequelize, ValidationError } from 'sequelize';
import { Request, Response, NextFunction } from 'express';
import { ErroValidacao } from '../erros/ErroValidacao';
import { ErroBase } from '../erros/ErroBase';

export function manipuladorDeErros(
  erro: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (erro instanceof ValidationError) {
    new ErroValidacao(
      erro.message,
      422,
      erro.errors.flatMap((errorItem) => (errorItem.path ? [errorItem] : [])) // Cria um array com os ValidationErrorItems válidos
    ).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res); // Use enviarResposta instead of enviarRespostas
  } else {
    new ErroBase("Erro inesperado").enviarResposta(res); // Provide a more informative message
  }
}
