import { NextFunction, Request, Response } from "express";
import { Conta } from "../models/Conta.model";
import { ContaRepo } from "../repository/ContaRepo";
import { ApiError, NotFoundError } from "../helper/apiErrros";
import { errorMiddleware } from "../middleware/ManipuladorDeErros";

class ContaController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { dt_venc, vlr_conta, nr_conta, 
              cd_conta_pk, dt_mes_ref, nm_uni_consu, 
              cd_user_alteracao, fl_ativo, nr_periodo, 
              vlr_total, cd_user_inclusao, cd_contrato_fk } = req.body;

      const new_conta = new Conta();
      new_conta.dt_venc = dt_venc;
      new_conta.vlr_conta = vlr_conta;
      new_conta.nr_conta = nr_conta;
      new_conta.cd_conta_pk = cd_conta_pk;
      new_conta.dt_mes_ref = dt_mes_ref;
      new_conta.nm_uni_consu = nm_uni_consu;
      new_conta.cd_user_alteracao = cd_user_alteracao;
      new_conta.cd_user_inclusao = cd_user_inclusao;
      new_conta.fl_ativo = fl_ativo;
      new_conta.nr_periodo = nr_periodo;
      new_conta.vlr_total = vlr_total;
      new_conta.cd_contrato_fk = cd_contrato_fk;
      await ContaRepo.save(new_conta);

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully created Conta!",
      });
    } catch (error) {
      console.log();
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const resp_data = await ContaRepo.getAll();

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully fetch all Conta data!",
        result: resp_data,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {

      let cd_conta_pk = parseInt(req.params["cd_conta_pk"])
      await ContaRepo.delete(cd_conta_pk)

      res.status(200).json({
        status: "Ok!",
        message: "Deletado com sucesso!"
      })
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!"
      })
    }
  }

  async findById(req: Request, res: Response) {
    console.log(req)
    try {
      let cd_conta_pk = parseInt(req.params["cd_conta_pk"])
      const new_conta = await ContaRepo.getById(cd_conta_pk)

      res.status(200).json({
        status: "Ok!",
        message: "Busca realizada com sucesso!",
        data: new_conta,
      })
    } catch (err) {
      res.status(500).json({
        status: "testandooooo!",
        message: "Internal Server Error!"
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      let cd_conta_pk = parseInt(req.params["cd_conta_pk"]);
      const new_conta = new Conta();

      new_conta.cd_conta_pk = cd_conta_pk;     
      new_conta.dt_venc = req.body.dt_venc;
      new_conta.vlr_conta = req.body.vlr_conta;
      new_conta.nr_conta = req.body.nr_conta;
      new_conta.dt_mes_ref = req.body.dt_mes_ref;
      new_conta.nm_uni_consu = req.body.nm_uni_consu;
      new_conta.cd_user_alteracao = req.body.cd_user_alteracao;
      new_conta.cd_user_inclusao = req.body.cd_user_inclusao;
      new_conta.fl_ativo = req.body.fl_ativo;
      new_conta.nr_periodo = req.body.nr_periodo;
      new_conta.vlr_total = req.body.vlr_total;
      new_conta.cd_contrato_fk = req.body.cd_contrato_fk;

      await ContaRepo.update(new_conta);

      res.status(200).json({
        status: "Ok!",
        message: "Conta alterada com sucesso!",
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Internal Server Error!",
      });
    }
  }
}


export default new ContaController()