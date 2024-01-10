import { Estado } from "../models/Estado.model";

export class EstadoRepo {
    static async save(estado: Estado): Promise<void> {
        try {
            await Estado.create({
                nm_estado: estado.nm_estado,
                sigla_uf: estado.sigla_uf,
                cd_estado_pk: estado.cd_estado_pk,
                cd_user_alteracao: estado.cd_user_alteracao,
                cd_user_inclusao: estado.cd_user_inclusao,
                fl_estado_ativo: estado.fl_estado_ativo,
                cd_pais_fk: estado.cd_pais_fk
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Estado[]> {
        try {
            return await Estado.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(EstadoRepoId: number): Promise<void> {
        try {
            const new_estado = await Estado.findOne({
                where: {
                    cd_estado_pk: EstadoRepoId,
                },
            })
            if (!new_estado) {
                throw new Error("Erro");
            }

            await new_estado.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(EstadoRepoId: number): Promise<Estado> {
        try {
            const new_estado = await Estado.findOne({
                where: {
                    cd_estado_pk: EstadoRepoId,
                },
            })
            if (!new_estado) {
                throw new Error("Erro");
            }

            return new_estado
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(estado: Estado): Promise<void> {
        try {
            const new_estado = await Estado.findOne({
                where: {
                    cd_estado_pk: estado.cd_estado_pk,
                },
            })
            if (!new_estado) {
                throw new Error("Erro");
            }
            new_estado.nm_estado = estado.nm_estado;
            new_estado.sigla_uf = estado.sigla_uf;
            new_estado.cd_user_alteracao = estado.cd_user_alteracao;
            new_estado.cd_user_inclusao = estado.cd_user_inclusao;
            new_estado.fl_estado_ativo = estado.fl_estado_ativo;
            new_estado.cd_pais_fk = estado.cd_pais_fk;
            await new_estado.save();
        } catch (error) {
            throw new Error("");
        }
    }
}