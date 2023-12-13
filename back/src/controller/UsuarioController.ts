import { Request, Response } from "express"
import { Usuario } from "../model/Usuario.model"
import { UsuarioRepo } from "../repository/UsuarioRepo";

class UsuarioController{
    async create(req: Request, res: Response){
        try{

            const new_usuario = new Usuario();
            new_usuario.login_rede = req.body.login_rede;
            new_usuario.nm_usuario = req.body.nm_usuario;
            new_usuario.login_rede = req.body.login_rede;
            new_usuario.senha_rede = req.body.senha_rede;
            new_usuario.nm_usuario = req.body.nm_usuario;
            new_usuario.fl_usuario_ativo = req.body.fl_usuario_ativo;
            new_usuario.cd_user_inclusao_usuario = req.body.cd_user_inclusao_usuario;
            new_usuario.dt_alteracao_usuario = req.body.dt_alteracao_usuario;
            new_usuario.dt_inclusao_usuario = req.body.dt_inclusao_usuario;
            new_usuario.cd_user_alteracao_usuario = req.body.cd_user_alteracao_usuario;

            await new UsuarioRepo().save(new_usuario)

            res.status(201).json({
                status: "Criado com sucesso!",
                message: "Criado com sucesso!"
            })
        }catch(err){
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }

    async delete(req: Request, res: Response){
        try{

            let cd_usuario = parseInt(req.params["cd_usuario"])
            await new UsuarioRepo().delete(cd_usuario)

            res.status(200).json({
                status: "Ok!",
                message: "Deletado com sucesso!"
            })
        }catch(err){
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }

    async findAll(req: Request, res: Response){
        try{

            const new_usuario = await new UsuarioRepo().retrieveAll

            res.status(200).json({
                status: "Ok!",
                message: "Deletado com sucesso!",
                data: new_usuario
            })
        }catch(err){
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }
}