import { Unidade_adm } from "../models/Unidade_adm.model";

export class Unidade_admRepo {
    static async save(unidade_adm: Unidade_adm): Promise<void> {
        try {
            await Unidade_adm.create({
                nm_unidade: unidade_adm.nm_unidade,
                cd_unidade_pk: unidade_adm.cd_unidade_pk,
                nm_logradouro: unidade_adm.nm_logradouro,
                cd_estrutura_adm_siga: unidade_adm.cd_estrutura_adm_siga,
                cd_cep: unidade_adm.cd_cep,
                nm_email: unidade_adm.nm_email,
                cd_inep: unidade_adm.cd_inep,
                nr_logradouro: unidade_adm.nr_logradouro,
                nm_sigla_unidade: unidade_adm.nm_sigla_unidade,
                nr_celular: unidade_adm.nr_celular,
                nr_telefone1: unidade_adm.nr_telefone1,
                nr_telefone2: unidade_adm.nr_telefone2,
                nm_tp_unidade: unidade_adm.nm_tp_unidade,
                nm_complemento: unidade_adm.nm_complemento,
                nm_dre: unidade_adm.nm_dre,
                cd_user_alteracao: unidade_adm.cd_user_alteracao,
                cd_user_inclusao: unidade_adm.cd_user_inclusao,
                fl_unidade_adm_ativo: unidade_adm.fl_unidade_adm_ativo,
                cd_municipio_fk: unidade_adm.cd_municipio_fk

            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Unidade_adm[]> {
        try {
            return await Unidade_adm.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(Unidade_admRepoId: number): Promise<void> {
        try {
            const new_unidade_adm = await Unidade_adm.findOne({
                where: {
                    cd_unidade_pk: Unidade_admRepoId,
                },
            })
            if (!new_unidade_adm) {
                throw new Error("Erro");
            }

            await new_unidade_adm.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(Unidade_admRepoId: number): Promise<Unidade_adm> {
        try {
            const new_unidade_adm = await Unidade_adm.findOne({
                where: {
                    cd_unidade_pk: Unidade_admRepoId,
                },
            })
            if (!new_unidade_adm) {
                throw new Error("Erro");
            }

            return new_unidade_adm
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(unidade_adm: Unidade_adm): Promise<void> {
        try {
            const new_unidade_adm = await Unidade_adm.findOne({
                where: {
                    cd_unidade_pk: unidade_adm.cd_unidade_pk,
                },
            })
            if (!new_unidade_adm) {
                throw new Error("Erro");
            }
            new_unidade_adm.nm_complemento = unidade_adm.nm_complemento,
            new_unidade_adm.nm_tp_unidade = unidade_adm.nm_tp_unidade,
            new_unidade_adm.nr_telefone2 = unidade_adm.nr_telefone2,
            new_unidade_adm.nm_unidade = unidade_adm.nm_unidade;
            new_unidade_adm.nm_logradouro = unidade_adm.nm_logradouro;
            new_unidade_adm.cd_estrutura_adm_siga = unidade_adm.cd_estrutura_adm_siga;
            new_unidade_adm.cd_cep = unidade_adm.cd_cep;
            new_unidade_adm.nm_email = unidade_adm.nm_email;
            new_unidade_adm.cd_inep = unidade_adm.cd_inep;
            new_unidade_adm.nr_logradouro = unidade_adm.nr_logradouro;
            new_unidade_adm.nm_sigla_unidade = unidade_adm.nm_sigla_unidade;
            new_unidade_adm.nr_celular = unidade_adm.nr_celular;
            new_unidade_adm.nr_telefone1 = unidade_adm.nr_telefone1;
            new_unidade_adm.nm_dre = unidade_adm.nm_dre;
            new_unidade_adm.cd_user_alteracao = unidade_adm.cd_user_alteracao;
            new_unidade_adm.cd_user_inclusao = unidade_adm.cd_user_inclusao;
            new_unidade_adm.fl_unidade_adm_ativo = unidade_adm.fl_unidade_adm_ativo;
            new_unidade_adm.cd_municipio_fk = unidade_adm.cd_municipio_fk;
            await new_unidade_adm.save();
        } catch (error) {
            throw new Error("");
        }
    }
}