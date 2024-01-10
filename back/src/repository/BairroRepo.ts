import { Bairro } from "../models/Bairro.model";

export class BairroRepo {
    static async save(bairro: Bairro): Promise<void> {
        try {
            await Bairro.create({
                nm_bairro: bairro.nm_bairro,
                cd_bairro_pk: bairro.cd_bairro_pk,
                cd_user_alteracao: bairro.cd_user_alteracao,
                cd_user_inclusao: bairro.cd_user_inclusao,
                fl_bairro_ativo: bairro.fl_bairro_ativo,
                cd_municipio_fk: bairro.cd_municipio_fk
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Bairro[]> {
        try {
            return await Bairro.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(BairroRepoId: number): Promise<void> {
        try {
            const new_bairro = await Bairro.findOne({
                where: {
                    cd_bairro_pk: BairroRepoId,
                },
            })
            if (!new_bairro) {
                throw new Error("Erro");
            }

            await new_bairro.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(BairroRepoId: number): Promise<Bairro> {
        try {
            const new_bairro = await Bairro.findOne({
                where: {
                    cd_bairro_pk: BairroRepoId,
                },
            })
            if (!new_bairro) {
                throw new Error("Erro");
            }

            return new_bairro
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(bairro: Bairro): Promise<void> {
        try {
            const new_bairro = await Bairro.findOne({
                where: {
                    cd_bairro_pk: bairro.cd_bairro_pk,
                },
            })
            if (!new_bairro) {
                throw new Error("Erro");
            }
            new_bairro.nm_bairro = bairro.nm_bairro;
            new_bairro.cd_user_alteracao = bairro.cd_user_alteracao;
            new_bairro.cd_user_inclusao = bairro.cd_user_inclusao;
            new_bairro.fl_bairro_ativo = bairro.fl_bairro_ativo;
            new_bairro.cd_municipio_fk = bairro.cd_municipio_fk;
            await new_bairro.save();
        } catch (error) {
            throw new Error("");
        }
    }
}