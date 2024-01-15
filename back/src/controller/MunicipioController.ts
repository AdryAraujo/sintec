import { Request, Response } from "express";
import { Estado } from "../models/Estado.model";
import {MunicipioRepo } from "../repository/MunicipioRepo";
import { Municipio } from "../models/Municipio.model";

class MunicipioController {
    async create(req: Request, res: Response) {
        try {
            const { cd_municipio_pk, nm_municipio,
                cd_user_alteracao, nm_abreviado_municipio, fl_municipio_ativo,
                cd_user_inclusao, cd_estado_fk, nr_ibge, nm_cep } = req.body;

            const new_municipio = new Municipio();

            new_municipio.cd_municipio_pk = cd_municipio_pk;
            new_municipio.nm_municipio = nm_municipio;
            new_municipio.nm_abreviado_municipio = nm_abreviado_municipio;
            new_municipio.nr_ibge = nr_ibge;
            new_municipio.nm_cep = nm_cep;
            new_municipio.cd_user_alteracao = cd_user_alteracao;
            new_municipio.cd_user_inclusao = cd_user_inclusao;
            new_municipio.fl_municipio_ativo = fl_municipio_ativo;
            new_municipio.cd_estado_fk = cd_estado_fk;

            await MunicipioRepo.save(new_municipio);

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
            const resp_data = await MunicipioRepo.getAll();

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

            let cd_municipio_pk = parseInt(req.params["cd_municipio_pk"])
            await MunicipioRepo.delete(cd_municipio_pk)

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
            let cd_municipio_pk = parseInt(req.params["cd_municipio_pk"])
            const new_municipio = await MunicipioRepo.getById(cd_municipio_pk)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_municipio,
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
            let cd_municipio_pk = parseInt(req.params["cd_municipio_pk"]);
            const new_municipio = new Municipio();

            new_municipio.cd_municipio_pk = cd_municipio_pk;
            new_municipio.nm_municipio = req.body.nm_municipio;
            new_municipio.nm_abreviado_municipio = req.body.nm_abreviado_municipio;
            new_municipio.nr_ibge = req.body.nr_ibge;
            new_municipio.nm_cep = req.body.nm_cep;
            new_municipio.cd_user_alteracao = req.body.cd_user_alteracao;
            new_municipio.cd_user_inclusao = req.body.cd_user_inclusao;
            new_municipio.fl_municipio_ativo = req.body.fl_municipio_ativo;

            await MunicipioRepo.update(new_municipio);

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


export default new MunicipioController()