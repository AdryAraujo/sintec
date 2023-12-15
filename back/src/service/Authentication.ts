
import { Usuario } from "../model/Usuario.model";
import { UsuarioRepo } from "../repository/UsuarioRepo";
import Authentication from "../utils/Authentication";

interface IAuthenticationService {
    login(login_rede: string, senha_rede: string): Promise<string>;
    register(
        login_rede: string,
        nm_usuario: string,
        senha_rede: string,
        fl_usuario_ativo: boolean,
        cd_user_inclusao_usuario: number,
        dt_alteracao_usuario: Date,
        dt_inclusao_usuario: Date,
        cd_user_alteracao_usuario: number
    ): Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
    async login(login_rede: string, senha_rede: string): Promise<string> {
        const usuario = await new UsuarioRepo().findByLogin_rede(login_rede);

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
                usuario.cd_usuario,
                usuario.fl_usuario_ativo,
                usuario.cd_user_inclusao_usuario,
                usuario.dt_alteracao_usuario,
                usuario.dt_inclusao_usuario,
                usuario.cd_user_alteracao_usuario
            );
        }
        return "";
    }
    async register(
        login_rede: string,
        nm_usuario: string,
        senha_rede: string,
        fl_usuario_ativo: boolean,
        cd_user_inclusao_usuario: number,
        dt_alteracao_usuario: Date,
        dt_inclusao_usuario: Date,
        cd_user_alteracao_usuario: number
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
            new_usuario.cd_user_inclusao_usuario = cd_user_inclusao_usuario,
            new_usuario.dt_alteracao_usuario = dt_alteracao_usuario,
            new_usuario.dt_inclusao_usuario = dt_inclusao_usuario,
            new_usuario.cd_user_alteracao_usuario = cd_user_alteracao_usuario

            await new UsuarioRepo().save(new_usuario);
        } catch (error) {
            throw new Error("Error login!");
        }
    }
}