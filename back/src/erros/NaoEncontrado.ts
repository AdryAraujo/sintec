import { Response } from 'express';
import { ErroBase } from './ErroBase';

export class NaoEncontrado extends ErroBase {
  constructor(
    public mensagem: string = "Página não encontrada",
    public status: number = 404
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
