import { Usuario } from "../model/Usuario.model";

interface IUsuarioRepo {
    save(usuario: Usuario): Promise<void>;
    update(usuario: Usuario): Promise<void>;
    delete(usuarioId: number): Promise<void>;
    retrieveById(usuarioId: number): Promise<Usuario>;
    retrieveAll(): Promise<Usuario[]>;
  }

  export class UsuarioRepo implements IUsuarioRepo{
    async save(usuario: Usuario): Promise<void> {
        try{
            await Usuario.create({
                login_rede: usuario.login_rede,
                senha_rede: usuario.senha_rede,
                nm_usuario: usuario.nm_usuario,
                fl_usuario_ativo: usuario.fl_usuario_ativo,
                cd_user_inclusao_usuario: usuario.cd_user_inclusao_usuario,
                dt_alteracao_usuario: usuario.dt_alteracao_usuario,
                dt_inclusao_usuario: usuario.dt_inclusao_usuario,
                cd_user_alteracao_usuario: usuario.cd_user_alteracao_usuario
            })
        }catch (error){
            throw new Error("Falha ao criar um usuario!");
        }
    }

    async update(usuario: Usuario): Promise<void> {
        try{
            const new_usuario = await Usuario.findOne({
                where:{
                    cd_usuario: usuario.cd_usuario,
                },
            })
            if(!new_usuario){
                throw new Error("Erro");
            }
            new_usuario.nm_usuario = usuario.nm_usuario;
            new_usuario.login_rede = usuario.login_rede;
            new_usuario.senha_rede = usuario.senha_rede;
            new_usuario.nm_usuario = usuario.nm_usuario;
            new_usuario.fl_usuario_ativo = usuario.fl_usuario_ativo;
            new_usuario.cd_user_inclusao_usuario = usuario.cd_user_inclusao_usuario;
            new_usuario.dt_alteracao_usuario = usuario.dt_alteracao_usuario;
            new_usuario.dt_inclusao_usuario = usuario.dt_inclusao_usuario;
            new_usuario.cd_user_alteracao_usuario = usuario.cd_user_alteracao_usuario;

            await new_usuario.save();
        } catch(error){
            throw new Error("");
        }
    }

    async delete(usuarioId: number): Promise<void> {
        try{
            const new_usuario = await Usuario.findOne({
                where:{
                    cd_usuario: usuarioId,
                },
            })
            if(!new_usuario){
                throw new Error("Erro");
            }

            await new_usuario.destroy()
        }catch(error){
            throw new Error("");
        }
    }

    async retrieveById(usuarioId: number): Promise<Usuario> {
        try{
            const new_usuario = await Usuario.findOne({
                where:{
                    cd_usuario: usuarioId,
                },
            })
            if(!new_usuario){
                throw new Error("Erro");
            }

            return new_usuario
        }catch(error){
            throw new Error("");
        }
    }

    async retrieveAll(): Promise<Usuario[]> {
        try{
            return await Usuario.findAll()
        }catch(error){
            throw new Error("");
        }
    }
  }