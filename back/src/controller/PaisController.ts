import { Request, Response } from "express";
import { Pais } from "../models/Pais.model";
import { PaisRepo } from "../repository/PaisRepo";

class PaisController {
    async create(req: Request, res: Response) {
        try {
            const { cd_pais_pk, nm_pais,
                cd_user_alteracao, sigla_pais, fl_pais_ativo,
                cd_user_inclusao } = req.body;

            const new_pais = new Pais();

            new_pais.cd_pais_pk = cd_pais_pk;
            new_pais.nm_pais = nm_pais;
            new_pais.sigla_pais = sigla_pais;
            new_pais.cd_user_alteracao = cd_user_alteracao;
            new_pais.cd_user_inclusao = cd_user_inclusao;
            new_pais.fl_pais_ativo = fl_pais_ativo;

            await PaisRepo.save(new_pais);

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
            const resp_data = await PaisRepo.getAll();

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

            let cd_pais_pk = parseInt(req.params["cd_pais_pk"])
            await PaisRepo.delete(cd_pais_pk)

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
            let cd_pais_pk = parseInt(req.params["cd_pais_pk"])
            const new_pais = await PaisRepo.getById(cd_pais_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_pais,
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
            let cd_pais_pk = parseInt(req.params["cd_pais_pk"]);
            const new_pais = new Pais();

            new_pais.cd_pais_pk = cd_pais_pk;
            new_pais.nm_pais = req.body.nm_pais;
            new_pais.cd_user_alteracao = req.body.cd_user_alteracao;
            new_pais.cd_user_inclusao = req.body.cd_user_inclusao;
            new_pais.fl_pais_ativo = req.body.fl_pais_ativo;

            await PaisRepo.update(new_pais);

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


export default new PaisController()