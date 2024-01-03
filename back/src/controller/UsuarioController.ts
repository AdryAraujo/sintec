import { Request, Response } from "express"
import { Usuario } from "../models/Usuario.model"
import { UsuarioRepo } from "../repository/UsuarioRepo";
import { AuthenticationService } from "../service/Authentication";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Authentication from "../utils/Authentication";
import { error } from "console";


class UsuarioController {
    async login(req: Request, res: Response) {
        try {
          const { login_rede, senha_rede } = req.body;
          const token = await new AuthenticationService().login(login_rede, senha_rede);
          if (token === "") {
            return res.status(400).json({
              status: "Bad Request!",
              message: "Wrong login_rede or senha_rede!",
            });
          }
          const res_token = { type: "Bearer", token: token };
          return res.status(200).json({
            status: "Ok!",
            message: "Successfully login!",
            result: res_token,
          });
        } catch (error) {
          return res.status(500).json({
            status: "Internal server Error!",
            message: "Internal server Error!",
          });
        }
      }
      // register controller
      async register(req: Request, res: Response) {
        try {
          const { nm_usuario, fl_usuario_ativo, login_rede, senha_rede, cd_user_inclusao_usuario, dt_alteracao_usuario, dt_inclusao_usuario, cd_user_alteracao_usuario} = req.body;
    
          await new AuthenticationService().register(
            login_rede,
            nm_usuario,
            senha_rede,
            fl_usuario_ativo,
            cd_user_inclusao_usuario,
            dt_alteracao_usuario,
            dt_inclusao_usuario,
            cd_user_alteracao_usuario
          );
    
          return res.status(200).json({
            status: "Ok!",
            message: "Successfully registerd users!",
          });
        } catch (error) {
            console.log(error);
          return res.status(500).json({
            status: "Internal server Error!",
            message: "error 500!",
          });
         
        }
      }

    async delete(req: Request, res: Response) {
        try {

            let cd_usuario = parseInt(req.params["cd_usuario"])
            await UsuarioRepo.delete(cd_usuario)

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

    async findAll(req: Request, res: Response) {
        try {
            const new_usuario = await UsuarioRepo.retrieveAll()

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_usuario,
            })
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
            console.log(err)
        }
    }

    async findById(req: Request, res: Response) {
      console.log(req)
        try {
            let cd_usuario = parseInt(req.params["cd_usuario"])
            const new_usuario = await UsuarioRepo.retrieveById(cd_usuario)

            res.status(200).json({
                status: "Ok!",
                message: "Busca realizada com sucesso!",
                data: new_usuario,
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
            let cd_usuario = parseInt(req.params["cd_usuario"]);
            const new_usuario = new Usuario();

            new_usuario.cd_usuario = cd_usuario;
            new_usuario.nm_usuario = req.body.nm_usuario;
            new_usuario.login_rede = req.body.login_rede;
            new_usuario.senha_rede = req.body.senha_rede;
            new_usuario.fl_usuario_ativo = req.body.fl_usuario_ativo;
            new_usuario.cd_user_inclusao_usuario = req.body.cd_user_inclusao_usuario;
            new_usuario.dt_alteracao_usuario = req.body.dt_alteracao_usuario;
            new_usuario.dt_inclusao_usuario = req.body.dt_inclusao_usuario;
            new_usuario.cd_user_alteracao_usuario = req.body.cd_user_alteracao_usuario;

            await UsuarioRepo.update(new_usuario);

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

    async identify(req: Request, res: Response) {
      console.log(req)
      console.log("passou")
        // Obtenha o token do cabeçalho de autorização
        const token = req.headers.authorization;
        console.log(token)
        if (!token) {
          return res.status(401).json({ error: 'Authorization header is missing' });
        }
        // const decodedToken = Authentication.validateToken(token)
        // console.log(decodedToken)

        try {
          // Verifique e decodifique o JWT
          const decodedToken = Authentication.validateToken(token)
          console.log("decoded",decodedToken)
          // if (decodedToken){
          //   // Autentique o usuário com base no token decodificado
          //   const user = UsuarioRepo.findByLogin_rede(decodedToken.login_rede);
          //   console.log("login ", decodedToken.login_rede)
          //   if (!user) {
          //     return res.status(401).json({ error: 'Invalid token' });
          //   }
          //   // Retornar dados do usuário
           
          // }
          res.json(decodedToken?.cd_usuario);
         
        } catch (error) {
          console.log(error);
          return res.status(401).json({ error: 'Invalid token' });
        }
      };
}

export default new UsuarioController()