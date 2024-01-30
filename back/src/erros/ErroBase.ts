import { Response } from 'express'; // Assuming Express is used for server
import Sequelize, { ValidationErrorItem }  from 'sequelize';

export class ErroBase extends Error {
  constructor(
    public mensagem = "Erro interno do servidor",
    public status = 500,
    public sequelizeError?: Sequelize.Error,
    public errors: ValidationErrorItem[] = [] // Adicionar a propriedade `errors` // Optional Sequelize error
  ) {
    super();
  }

  enviarResposta(res: Response) {
    res.status(this.status).json({
      mensagem: this.message,
      status: this.status,
      errors: this.errors // Include Sequelize errors if available
    });
  }
}
