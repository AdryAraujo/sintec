import { Response } from 'express';
import { ErroBase } from './ErroBase';

export class RequisicaoIncorreta extends ErroBase {
  constructor(
    public mensagem: string = "Um ou mais dados fornecidos estão incorretos",
    public status: number = 400
  ) {
    super(mensagem);
  }

  enviarResposta(res: Response) {
    res.status(this.status).json({
      mensagem: this.mensagem,
      status: this.status
    });
  }
}
