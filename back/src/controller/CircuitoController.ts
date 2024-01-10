import { Request, Response } from "express";
import { Circuito } from "../models/Circuito.models";
import { CircuitoRepo } from "../repository/CircuitoRepo";

class CircuitoController {
    async create(req: Request, res: Response) {
        try {
            const { cd_circuito_pk, nr_velocidade,
                cd_user_alteracao, nr_circuito, fl_circuito_ativo,
                cd_conta_fk, cd_user_inclusao } = req.body;

            const new_circuito = new Circuito();

            new_circuito.cd_circuito_pk = cd_circuito_pk;
            new_circuito.nr_velocidade = nr_velocidade;
            new_circuito.nr_circuito = nr_circuito;
            new_circuito.cd_user_alteracao = cd_user_alteracao;
            new_circuito.cd_user_inclusao = cd_user_inclusao;
            new_circuito.fl_circuito_ativo = fl_circuito_ativo;
            new_circuito.cd_conta_fk = cd_conta_fk;

            await CircuitoRepo.save(new_circuito);

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
            const resp_data = await CircuitoRepo.getAll();

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

            let cd_circuito_pk = parseInt(req.params["cd_circuito_pk"])
            await CircuitoRepo.delete(cd_circuito_pk)

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
            let cd_circuito_pk = parseInt(req.params["cd_circuito_pk"])
            const new_circuito = await CircuitoRepo.getById(cd_circuito_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_circuito,
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
            let cd_circuito_pk = parseInt(req.params["cd_circuito_pk"]);
            const new_circuito = new Circuito();

            new_circuito.cd_circuito_pk = cd_circuito_pk;
            new_circuito.nr_velocidade = req.body.nr_velocidade;
            new_circuito.nr_circuito = req.body.nr_circuito;
            new_circuito.cd_user_alteracao = req.body.cd_user_alteracao;
            new_circuito.cd_user_inclusao = req.body.cd_user_inclusao;
            new_circuito.fl_circuito_ativo = req.body.fl_circuito_ativo;
            new_circuito.cd_conta_fk = req.body.cd_conta_fk;

            await CircuitoRepo.update(new_circuito);

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


export default new CircuitoController()