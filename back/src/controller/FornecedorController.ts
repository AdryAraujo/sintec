import { Request, Response } from "express";
import { FornecedorRepo } from "../repository/FornecedorRepo";
import { Fornecedor } from "../models/Fornecedor.model";

class FornecedorController {
  async create(req: Request, res: Response) {
    try {
      const { cd_fornecedor_pk, nm_fornecedor, nm_logradouro, 
              nr_cnpj, nm_email, cd_user_alteracao, cd_cep, 
              nr_cpf, cd_user_inclusao, nr_celular, nr_logradouro, 
              nr_inst_estadual,nr_telefone, nm_representante, 
              fl_fornecedor_ativo, cd_municipio_fk} = req.body;

      const new_fornecedor = new Fornecedor();
      new_fornecedor.cd_fornecedor_pk = cd_fornecedor_pk;
      new_fornecedor.nm_fornecedor = nm_fornecedor;
      new_fornecedor.nm_logradouro = nm_logradouro;
      new_fornecedor.nr_cnpj = nr_cnpj;
      new_fornecedor.cd_cep = cd_cep;
      new_fornecedor.nm_email = nm_email;
      new_fornecedor.cd_user_alteracao = cd_user_alteracao;
      new_fornecedor.cd_user_inclusao = cd_user_inclusao;
      new_fornecedor.nr_logradouro = nr_logradouro;
      new_fornecedor.cd_cep = cd_cep;
      new_fornecedor.nr_cpf = nr_cpf;
      new_fornecedor.cd_municipio_fk = cd_municipio_fk;
      new_fornecedor.nr_celular = nr_celular;
      new_fornecedor.nr_logradouro = nr_logradouro;
      new_fornecedor.nr_inst_estadual = nr_inst_estadual;
      new_fornecedor.nr_celular = nr_celular;
      new_fornecedor.nr_telefone = nr_telefone;
      new_fornecedor.nm_representante = nm_representante;
      new_fornecedor.fl_fornecedor_ativo = fl_fornecedor_ativo;
      new_fornecedor.cd_municipio_fk = cd_municipio_fk;

      await FornecedorRepo.save(new_fornecedor);
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
      const resp_data = await FornecedorRepo.getAll();

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

      let nr_cnpj = parseInt(req.params["nr_cnpj"])
      await FornecedorRepo.delete(nr_cnpj)

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
      let nr_cnpj = parseInt(req.params["nr_cnpj"])
      const new_fornecedor = await FornecedorRepo.getById(nr_cnpj)

      res.status(200).json({
        status: "Ok!",
        message: "Busca realizada com sucesso!",
        data: new_fornecedor,
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
      let nr_cnpj = parseInt(req.params["nr_cnpj"]);
      const new_fornecedor = new Fornecedor();

      new_fornecedor.nr_cnpj = req.body.nr_cnpj;     
      new_fornecedor.cd_fornecedor_pk = req.body.cd_fornecedor_pk;
      new_fornecedor.nm_fornecedor = req.body.nm_fornecedor;
      new_fornecedor.nm_logradouro = req.body.nm_logradouro;
      new_fornecedor.cd_cep = req.body.cd_cep;
      new_fornecedor.nm_email = req.body.nm_email;
      new_fornecedor.cd_user_alteracao = req.body.cd_user_alteracao;
      new_fornecedor.cd_user_inclusao = req.body.cd_user_inclusao;
      new_fornecedor.nr_logradouro = req.body.nr_logradouro;
      new_fornecedor.cd_cep = req.body.cd_cep;
      new_fornecedor.nr_cpf = req.body.nr_cpf;
      new_fornecedor.cd_municipio_fk = req.body.cd_municipio_fk;
      new_fornecedor.nr_celular = req.body.nr_celular;
      new_fornecedor.nr_logradouro = req.body.nr_logradouro;
      new_fornecedor.nr_inst_estadual = req.body.nr_inst_estadual;
      new_fornecedor.nr_celular = req.body.nr_celular;
      new_fornecedor.nr_telefone = req.body.nr_telefone;
      new_fornecedor.nm_representante = req.body.nm_representante;
      new_fornecedor.fl_fornecedor_ativo = req.body.fl_fornecedor_ativo;
      new_fornecedor.cd_municipio_fk = req.body.cd_municipio_fk;

      await FornecedorRepo.update(new_fornecedor);

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


export default new FornecedorController()