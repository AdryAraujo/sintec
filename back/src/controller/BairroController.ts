import { Request, Response } from "express";
import { Bairro } from "../models/Bairro.model";
import { BairroRepo } from "../repository/BairroRepo";

class BairroController {
    async create(req: Request, res: Response) {
        try {
            const { cd_bairro_pk, nm_bairro,
                cd_user_alteracao, nr_circuito, fl_bairro_ativo,
                cd_municipio_fk, cd_user_inclusao } = req.body;

            const new_bairro = new Bairro();

            new_bairro.cd_bairro_pk = cd_bairro_pk;
            new_bairro.nm_bairro = nm_bairro;
            new_bairro.cd_user_alteracao = cd_user_alteracao;
            new_bairro.cd_user_inclusao = cd_user_inclusao;
            new_bairro.fl_bairro_ativo = fl_bairro_ativo;
            new_bairro.cd_municipio_fk = cd_municipio_fk;

            await BairroRepo.save(new_bairro);

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
            const resp_data = await BairroRepo.getAll();

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

            let cd_bairro_pk = parseInt(req.params["cd_bairro_pk"])
            await BairroRepo.delete(cd_bairro_pk)

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
            let cd_bairro_pk = parseInt(req.params["cd_bairro_pk"])
            const new_bairro = await BairroRepo.getById(cd_bairro_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_bairro,
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
            let cd_bairro_pk = parseInt(req.params["cd_bairro_pk"]);
            const new_bairro = new Bairro();

            new_bairro.cd_bairro_pk = cd_bairro_pk;
            new_bairro.nm_bairro = req.body.nm_bairro;
            new_bairro.cd_user_alteracao = req.body.cd_user_alteracao;
            new_bairro.cd_user_inclusao = req.body.cd_user_inclusao;
            new_bairro.fl_bairro_ativo = req.body.fl_bairro_ativo;
            new_bairro.cd_municipio_fk = req.body.cd_municipio_fk;

            await BairroRepo.update(new_bairro);

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


export default new BairroController()