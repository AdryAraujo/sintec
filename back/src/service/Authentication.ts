import { Usuario } from "../models/Usuario.model";
import { UsuarioRepo } from "../repository/UsuarioRepo";
import Authentication from "../utils/Authentication";

interface IAuthenticationService {
    login(login_rede: string, senha_rede: string): Promise<string>;
    register(
        login_rede: string,
        nm_usuario: string,
        senha_rede: string,
        fl_usuario_ativo: boolean,
        cd_user_inclusao: number,
        dt_alteracao: Date,
        dt_inclusao: Date,
        cd_user_alteracao: number
    ): Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
    async login(login_rede: string, senha_rede: string): Promise<string> {
        const usuario = await UsuarioRepo.findByLogin_rede(login_rede);

        if (!usuario) {
            throw new Error("Bad Request!");
        }
        // check password
        let compare = await Authentication.passwordCompare(
            senha_rede,
            usuario.senha_rede
        );

        // generate token
        if (compare) {
            return Authentication.generateToken(
                usuario.login_rede,
                usuario.nm_usuario,
                usuario.cd_usuario_pk,
                usuario.fl_usuario_ativo,
                usuario.cd_user_inclusao,
                usuario.dt_alteracao,
                usuario.dt_inclusao,
                usuario.cd_user_alteracao
            );
        }
        return "";
    }
    async register(
        login_rede: string,
        nm_usuario: string,
        senha_rede: string,
        fl_usuario_ativo: boolean,
        cd_user_inclusao: number,
        dt_alteracao: Date,
        dt_inclusao: Date,
        cd_user_alteracao: number
    ): Promise<void> {
        try {
            const hashedPassword: string = await Authentication.passwordHash(
                senha_rede
            );
            const new_usuario = new Usuario();
            new_usuario.login_rede = login_rede;
            new_usuario.senha_rede = hashedPassword;
            new_usuario.nm_usuario = nm_usuario,
            new_usuario.fl_usuario_ativo = fl_usuario_ativo,
            new_usuario.cd_user_inclusao = cd_user_inclusao,
            new_usuario.dt_alteracao = dt_alteracao,
            new_usuario.dt_inclusao = dt_inclusao,
            new_usuario.cd_user_alteracao = cd_user_alteracao

            await UsuarioRepo.save(new_usuario);
        } catch (error) {
            console.log(error)
            throw new Error("Error login!");
        }
    }
}