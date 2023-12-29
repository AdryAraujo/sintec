import { Request, Response } from "express";
import { Conta } from "../model/Conta.model";
import { ContaRepo } from "../repository/ContaRepo";

class ContaController {
  async create(req: Request, res: Response) {
    try {
      const { dt_venc, vlr_conta, nr_conta, 
              cd_conta, dt_mes_ref, nm_uni_consu, 
              cd_user_alteracao, fl_ativo, nr_periodo, 
              vlr_total, cd_user_inclusao } = req.body;

      const new_conta = new Conta();
      new_conta.dt_venc = dt_venc;
      new_conta.vlr_conta = vlr_conta;
      new_conta.nr_conta = nr_conta;
      new_conta.cd_conta = cd_conta;
      new_conta.dt_mes_ref = dt_mes_ref;
      new_conta.nm_uni_consu = nm_uni_consu;
      new_conta.cd_user_alteracao = cd_user_alteracao;
      new_conta.cd_user_inclusao = cd_user_inclusao;
      new_conta.fl_ativo = fl_ativo;
      new_conta.nr_periodo = nr_periodo;
      new_conta.vlr_total = vlr_total;
      await ContaRepo.save(new_conta);

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully created Conta!",
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: "Internal server error!",
        message: "Internal server error!",
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const resp_data = await ContaRepo.getAll();

      return res.status(200).json({
        status: "Ok!",
        message: "Successfully fetch all Conta data!",
        result: resp_data,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Internal server error!",
        message: "Internal server error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {

      let cd_conta = parseInt(req.params["cd_conta"])
      await ContaRepo.delete(cd_conta)

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
      let cd_conta = parseInt(req.params["cd_conta"])
      const new_conta = await ContaRepo.getById(cd_conta)

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
      let cd_conta = parseInt(req.params["cd_conta"]);
      const new_conta = new Conta();

      new_conta.cd_conta = cd_conta;     
      new_conta.dt_venc = req.body.conta.dt_venc;
      new_conta.vlr_conta = req.body.conta.vlr_conta;
      new_conta.nr_conta = req.body.conta.nr_conta;
      new_conta.dt_mes_ref = req.body.conta.dt_mes_ref;
      new_conta.nm_uni_consu = req.body.conta.nm_uni_consu;
      new_conta.cd_user_alteracao = req.body.conta.cd_user_alteracao;
      new_conta.cd_user_inclusao = req.body.conta.cd_user_inclusao;
      new_conta.fl_ativo = req.body.conta.fl_ativo;
      new_conta.nr_periodo = req.body.conta.nr_periodo;
      new_conta.vlr_total = req.body.conta.vlr_total;

      await ContaRepo.update(new_conta);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated Usuario data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}


export default new ContaController()