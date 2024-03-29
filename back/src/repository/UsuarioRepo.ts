import { Usuario } from "../models/Usuario.model";

export class UsuarioRepo{
    static async save(usuario: Usuario): Promise<void> {
        try {
            await Usuario.create({
                login_rede: usuario.login_rede,
                senha_rede: usuario.senha_rede,
                nm_usuario: usuario.nm_usuario,
                fl_usuario_ativo: usuario.fl_usuario_ativo,
                cd_user_inclusao: usuario.cd_user_inclusao,
                dt_alteracao: usuario.dt_alteracao,
                dt_inclusao: usuario.dt_inclusao,
                cd_user_alteracao: usuario.cd_user_alteracao
            })
        } catch (error) {
            throw new Error("Falha ao criar um usuario!");
        }
    }

    static async update(usuario: Usuario): Promise<void> {
        try {
            const new_usuario = await Usuario.findOne({
                where: {
                    cd_usuario_pk: usuario.cd_usuario_pk,
                },
            })
            if (!new_usuario) {
                throw new Error("Erro");
            }
            new_usuario.nm_usuario = usuario.nm_usuario;
            new_usuario.login_rede = usuario.login_rede;
            new_usuario.senha_rede = usuario.senha_rede;
            new_usuario.fl_usuario_ativo = usuario.fl_usuario_ativo;
            new_usuario.cd_user_inclusao = usuario.cd_user_inclusao;
            new_usuario.dt_alteracao = usuario.dt_alteracao;
            new_usuario.dt_inclusao = usuario.dt_inclusao;
            new_usuario.cd_user_alteracao = usuario.cd_user_alteracao;

            await new_usuario.save();
        } catch (error) {
            throw new Error("");
        }
    }

    static async delete(usuarioId: number): Promise<void> {
        try {
            const new_usuario = await Usuario.findOne({
                where: {
                    cd_usuario_pk: usuarioId,
                },
            })
            if (!new_usuario) {
                throw new Error("Erro");
            }

            await new_usuario.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async retrieveById(usuarioId: number): Promise<Usuario> {
        try {
            const new_usuario = await Usuario.findOne({
                where: {
                    cd_usuario_pk: usuarioId,
                },
            })
            if (!new_usuario) {
                throw new Error("Erro");
            }

            return new_usuario
        } catch (error) {
            throw new Error("");
        }
    }

    static async retrieveAll(): Promise<Usuario[]> {
        try {
            return await Usuario.findAll()
        } catch (error) {
            console.log(error)
            throw new Error("lalala");
        }
    }

    static async findByLogin_rede(login_rede: any): Promise<Usuario> {
        try {
            const new_usuario = await Usuario.findOne({
                where: { login_rede: login_rede },
            });
            if (!new_usuario) {
                throw new Error("Usuario not found!");
            }
            console.log("user", new_usuario.dataValues)
            return new_usuario.dataValues;
        } catch (error) {
            throw new Error("Failed to feacth data by login_rede!");
        }
    }

}