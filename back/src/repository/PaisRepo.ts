import { Pais } from "../models/Pais.model";

export class PaisRepo {
    static async save(pais: Pais): Promise<void> {
        try {
            await Pais.create({
                nm_pais: pais.nm_pais,
                sigla_pais: pais.sigla_pais,
                cd_pais_pk: pais.cd_pais_pk,
                cd_user_alteracao: pais.cd_user_alteracao,
                cd_user_inclusao: pais.cd_user_inclusao,
                fl_pais_ativo: pais.fl_pais_ativo,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Pais[]> {
        try {
            return await Pais.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(PaisRepoId: number): Promise<void> {
        try {
            const new_pais = await Pais.findOne({
                where: {
                    cd_pais_pk: PaisRepoId,
                },
            })
            if (!new_pais) {
                throw new Error("Erro");
            }

            await new_pais.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(PaisRepoId: number): Promise<Pais> {
        try {
            const new_pais = await Pais.findOne({
                where: {
                    cd_pais_pk: PaisRepoId,
                },
            })
            if (!new_pais) {
                throw new Error("Erro");
            }

            return new_pais
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(pais: Pais): Promise<void> {
        try {
            const new_pais = await Pais.findOne({
                where: {
                    cd_pais_pk: pais.cd_pais_pk,
                },
            })
            if (!new_pais) {
                throw new Error("Erro");
            }
            new_pais.nm_pais = pais.nm_pais;
            new_pais.sigla_pais = pais.sigla_pais;
            new_pais.cd_user_alteracao = pais.cd_user_alteracao;
            new_pais.cd_user_inclusao = pais.cd_user_inclusao;
            new_pais.fl_pais_ativo = pais.fl_pais_ativo;
            await new_pais.save();
        } catch (error) {
            throw new Error("");
        }
    }
}