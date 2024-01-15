import { Request, Response } from "express";
import { Conta } from "../models/Conta.model";
import { Unidade_admRepo } from "../repository/Unidade_admRepo";
import { Unidade_adm } from "../models/Unidade_adm.model";

class Unidade_admController {
  async create(req: Request, res: Response) {
    try {
      const { cd_estrutura_adm_siga, nm_unidade, nm_logradouro, 
              cd_unidade_pk, cd_cep, nm_email, 
              cd_user_alteracao, nr_logradouro, cd_inep, 
              nm_sigla_unidade, cd_user_inclusao, cd_municipio_fk,
              nr_celular, nr_telefone1, nr_telefone2, nm_tp_unidade,
              nm_complemento, nm_dre, fl_unidade_adm_ativo} = req.body;

      const new_unidade_adm = new Unidade_adm();
      new_unidade_adm.cd_estrutura_adm_siga = cd_estrutura_adm_siga;
      new_unidade_adm.nm_unidade = nm_unidade;
      new_unidade_adm.nm_logradouro = nm_logradouro;
      new_unidade_adm.cd_unidade_pk = cd_unidade_pk;
      new_unidade_adm.cd_cep = cd_cep;
      new_unidade_adm.nm_email = nm_email;
      new_unidade_adm.cd_user_alteracao = cd_user_alteracao;
      new_unidade_adm.cd_user_inclusao = cd_user_inclusao;
      new_unidade_adm.nr_logradouro = nr_logradouro;
      new_unidade_adm.cd_inep = cd_inep;
      new_unidade_adm.nm_sigla_unidade = nm_sigla_unidade;
      new_unidade_adm.cd_municipio_fk = cd_municipio_fk;
      new_unidade_adm.nr_celular = nr_celular;
      new_unidade_adm.nr_telefone1 = nr_telefone1;
      new_unidade_adm.nr_telefone2 = nr_telefone2;
      new_unidade_adm.nm_tp_unidade = nm_tp_unidade;
      new_unidade_adm.nm_complemento = nm_complemento;
      new_unidade_adm.nm_dre = nm_dre;
      new_unidade_adm.fl_unidade_adm_ativo = fl_unidade_adm_ativo;

      await Unidade_admRepo.save(new_unidade_adm);
      return res.status(200).json({
        status: "Ok!",
        message: "Successfully created Conta!",
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: "Erro ao Inserir linha no banco",
        message: "Erro ao Inserir linha no banco",
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const resp_data = await Unidade_admRepo.getAll();

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

      let cd_unidade_pk = parseInt(req.params["cd_unidade_pk"])
      await Unidade_admRepo.delete(cd_unidade_pk)

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
      let cd_unidade_pk = parseInt(req.params["cd_unidade_pk"])
      const new_unidade_adm = await Unidade_admRepo.getById(cd_unidade_pk)

      res.status(200).json({
        status: "Ok!",
        message: "Busca realizada com sucesso!",
        data: new_unidade_adm,
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
      let cd_unidade_pk = parseInt(req.params["cd_unidade_pk"]);
      const new_unidade_adm = new Unidade_adm();

      new_unidade_adm.cd_unidade_pk = cd_unidade_pk;     
      new_unidade_adm.cd_estrutura_adm_siga = req.body.cd_estrutura_adm_siga;
      new_unidade_adm.nm_unidade = req.body.nm_unidade;
      new_unidade_adm.nm_logradouro = req.body.nm_logradouro;
      new_unidade_adm.cd_cep = req.body.cd_cep;
      new_unidade_adm.nm_email = req.body.nm_email;
      new_unidade_adm.cd_user_alteracao = req.body.cd_user_alteracao;
      new_unidade_adm.cd_user_inclusao = req.body.cd_user_inclusao;
      new_unidade_adm.nr_logradouro = req.body.nr_logradouro;
      new_unidade_adm.cd_inep = req.body.cd_inep;
      new_unidade_adm.nm_sigla_unidade = req.body.nm_sigla_unidade;
      new_unidade_adm.cd_municipio_fk = req.body.cd_municipio_fk;
      new_unidade_adm.nr_celular = req.body.nr_celular;
      new_unidade_adm.nr_telefone1 = req.body.nr_telefone1;
      new_unidade_adm.nr_telefone2 = req.body.nr_telefone2;
      new_unidade_adm.nm_tp_unidade = req.body.nm_tp_unidade;
      new_unidade_adm.nm_complemento = req.body.nm_complemento;
      new_unidade_adm.nm_dre = req.body.nm_dre;
      new_unidade_adm.fl_unidade_adm_ativo = req.body.fl_unidade_adm_ativo;

      await Unidade_admRepo.update(new_unidade_adm);

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


export default new Unidade_admController()