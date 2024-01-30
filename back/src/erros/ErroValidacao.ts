import { Response } from 'express';
import { RequisicaoIncorreta } from './RequisicaoIncorreta';
import { ValidationErrorItem } from 'sequelize';

export class ErroValidacao extends RequisicaoIncorreta {
  constructor(
    public mensagem: string = "Erros de validação",
    public status: number = 422,
    public errors: ValidationErrorItem[] = []
  ) {
    super(mensagem);
  }

  enviarResposta(res: Response) {
    res.status(this.status).json({
      mensagem: this.mensagem,
      status: this.status,
      erros: this.errors
    });
  }
}
