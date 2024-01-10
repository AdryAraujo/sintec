import { Municipio } from "../models/Municipio.model";

export class MunicipioRepo {
    static async save(municipio: Municipio): Promise<void> {
        try {
            await Municipio.create({
                nm_municipio: municipio.nm_municipio,
                nm_abreviado_municipio: municipio.nm_abreviado_municipio,
                cd_municipio_pk: municipio.cd_municipio_pk,
                nr_ibge: municipio.nr_ibge,
                nm_cep: municipio.nm_cep,
                cd_user_alteracao: municipio.cd_user_alteracao,
                cd_user_inclusao: municipio.cd_user_inclusao,
                fl_municipio_ativo: municipio.fl_municipio_ativo,
                cd_estado_fk: municipio.cd_estado_fk
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Municipio[]> {
        try {
            return await Municipio.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(MunicipioRepoId: number): Promise<void> {
        try {
            const new_municipio = await Municipio.findOne({
                where: {
                    cd_municipio_pk: MunicipioRepoId,
                },
            })
            if (!new_municipio) {
                throw new Error("Erro");
            }

            await new_municipio.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(MunicipioRepoId: number): Promise<Municipio> {
        try {
            const new_municipio = await Municipio.findOne({
                where: {
                    cd_municipio_pk: MunicipioRepoId,
                },
            })
            if (!new_municipio) {
                throw new Error("Erro");
            }

            return new_municipio
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(municipio: Municipio): Promise<void> {
        try {
            const new_municipio = await Municipio.findOne({
                where: {
                    cd_municipio_pk: municipio.cd_municipio_pk,
                },
            })
            if (!new_municipio) {
                throw new Error("Erro");
            }
            new_municipio.nm_municipio = municipio.nm_municipio;
            new_municipio.nm_abreviado_municipio = municipio.nm_abreviado_municipio;
            new_municipio.nr_ibge = municipio.nr_ibge;
            new_municipio.nm_cep = municipio.nm_cep;
            new_municipio.cd_user_alteracao = municipio.cd_user_alteracao;
            new_municipio.cd_user_inclusao = municipio.cd_user_inclusao;
            new_municipio.fl_municipio_ativo = municipio.fl_municipio_ativo;
            new_municipio.cd_estado_fk = municipio.cd_estado_fk;
            await new_municipio.save();
        } catch (error) {
            throw new Error("");
        }
    }
}