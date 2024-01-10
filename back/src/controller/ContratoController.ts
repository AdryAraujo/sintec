import { Request, Response } from "express";
import { Contrato } from "../models/Contrato.model";
import { ContratoRepo } from "../repository/ContratoRepo";

class ContratoController {
    async create(req: Request, res: Response) {
        try {
            const { nm_tp_servico, cd_user_alteracao,
                 nm_tp_unidade, dt_conta, cd_user_inclusao,
                 dt_mes_ref, nm_tp_contrato, fl_contrato_ativo,
                 nr_contrato, fl_renovacao, cd_fornecedor_fk, 
                 cd_contrato_pk} = req.body;

            const new_contrato = new Contrato();

            new_contrato.cd_contrato_pk = cd_contrato_pk;
            new_contrato.nm_tp_servico = nm_tp_servico;
            new_contrato.nm_tp_unidade = nm_tp_unidade;
            new_contrato.dt_conta = dt_conta;
            new_contrato.dt_mes_ref = dt_mes_ref;
            new_contrato.nm_tp_contrato = nm_tp_contrato;
            new_contrato.cd_user_alteracao = cd_user_alteracao;
            new_contrato.cd_user_inclusao = cd_user_inclusao;
            new_contrato.fl_contrato_ativo = fl_contrato_ativo;
            new_contrato.nr_contrato = nr_contrato;
            new_contrato.fl_renovacao = fl_renovacao;
            new_contrato.cd_fornecedor_fk = cd_fornecedor_fk;

            await ContratoRepo.save(new_contrato);

            return res.status(200).json({
                status: "Ok!",
                message: "Successfully created Contrato!",
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
            const resp_data = await ContratoRepo.getAll();

            return res.status(200).json({
                status: "Ok!",
                message: "Successfully fetch all Contrato data!",
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

            let cd_contrato_pk = parseInt(req.params["cd_contrato_pk"])
            await ContratoRepo.delete(cd_contrato_pk)

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
            let cd_contrato_pk = parseInt(req.params["cd_contrato_pk"])
            const new_contrato = await ContratoRepo.getById(cd_contrato_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_contrato,
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
            let cd_contrato_pk = parseInt(req.params["cd_contrato_pk"]);
            const new_contrato = new Contrato();

            new_contrato.cd_contrato_pk = cd_contrato_pk;
            new_contrato.nm_tp_servico = req.body.nm_tp_servico;
            new_contrato.nm_tp_unidade = req.body.nm_tp_unidade;
            new_contrato.dt_conta = req.body.dt_conta;
            new_contrato.dt_mes_ref = req.body.dt_mes_ref;
            new_contrato.nm_tp_contrato = req.body.nm_tp_contrato;
            new_contrato.cd_user_alteracao = req.body.cd_user_alteracao;
            new_contrato.cd_user_inclusao = req.body.cd_user_inclusao;
            new_contrato.fl_contrato_ativo = req.body.fl_contrato_ativo;
            new_contrato.nr_contrato = req.body.nr_contrato;
            new_contrato.fl_renovacao = req.body.fl_renovacao;
            new_contrato.cd_fornecedor_fk = req.body.cd_fornecedor_fk;

            await ContratoRepo.update(new_contrato);

            res.status(200).json({
                status: "Ok!",
                message: "Contrato alterada com sucesso!",
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "Internal Server Error!",
            });
        }
    }
}


export default new ContratoController()