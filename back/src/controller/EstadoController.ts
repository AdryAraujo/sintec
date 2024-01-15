import { Request, Response } from "express";
import { Estado } from "../models/Estado.model";
import { EstadoRepo } from "../repository/EstadoRepo";

class PaisController {
    async create(req: Request, res: Response) {
        try {
            const { cd_estado_pk, nm_estado,
                cd_user_alteracao, sigla_uf, fl_estado_ativo,
                cd_user_inclusao, cd_pais_fk } = req.body;

            const new_estado = new Estado();

            new_estado.cd_estado_pk = cd_estado_pk;
            new_estado.nm_estado = nm_estado;
            new_estado.sigla_uf = sigla_uf;
            new_estado.cd_user_alteracao = cd_user_alteracao;
            new_estado.cd_user_inclusao = cd_user_inclusao;
            new_estado.fl_estado_ativo = fl_estado_ativo;
            new_estado.cd_pais_fk = cd_pais_fk;

            await EstadoRepo.save(new_estado);

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
            const resp_data = await EstadoRepo.getAll();

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

            let cd_estado_pk = parseInt(req.params["cd_estado_pk"])
            await EstadoRepo.delete(cd_estado_pk)

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
            let cd_estado_pk = parseInt(req.params["cd_estado_pk"])
            const new_estado = await EstadoRepo.getById(cd_estado_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_estado,
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
            let cd_estado_pk = parseInt(req.params["cd_estado_pk"]);
            const new_estado = new Estado();

            new_estado.cd_estado_pk = cd_estado_pk;
            new_estado.nm_estado = req.body.nm_estado;
            new_estado.cd_user_alteracao = req.body.cd_user_alteracao;
            new_estado.cd_user_inclusao = req.body.cd_user_inclusao;
            new_estado.fl_estado_ativo = req.body.fl_estado_ativo;

            await EstadoRepo.update(new_estado);

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