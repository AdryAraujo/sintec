import { Contrato } from "../models/Contrato.model";

export class ContratoRepo {
    static async save(contrato: Contrato): Promise<void> {
        try {
            await Contrato.create({
                nm_tp_servico: contrato.nm_tp_servico,
                nm_tp_unidade: contrato.nm_tp_unidade,
                dt_conta: contrato.dt_conta,
                cd_contrato_pk: contrato.cd_contrato_pk,
                dt_mes_ref: contrato.dt_mes_ref,
                nm_tp_contrato: contrato.nm_tp_contrato,
                cd_user_alteracao: contrato.cd_user_alteracao,
                cd_user_inclusao: contrato.cd_user_inclusao,
                fl_contrato_ativo: contrato.fl_contrato_ativo,
                nr_contrato: contrato.nr_contrato,
                fl_renovacao: contrato.fl_renovacao,
                cd_fornecedor_fk: contrato.cd_fornecedor_fk,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Contrato[]> {
        try {
            return await Contrato.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(contratoId: number): Promise<void> {
        try {
            const new_contrato = await Contrato.findOne({
                where: {
                    cd_contrato_pk: contratoId,
                },
            })
            if (!new_contrato) {
                throw new Error("Erro");
            }

            await new_contrato.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(contratoId: number): Promise<Contrato> {
        try {
            const new_contrato = await Contrato.findOne({
                where: {
                    cd_contrato_pk: contratoId,
                },
            })
            if (!new_contrato) {
                throw new Error("Erro");
            }

            return new_contrato
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(contrato: Contrato): Promise<void> {
        try {
            const new_contrato = await Contrato.findOne({
                where: {
                    cd_contrato_pk: contrato.cd_contrato_pk,
                },
            })
            if (!new_contrato) {
                throw new Error("Erro");
            }
            new_contrato.nm_tp_servico = contrato.nm_tp_servico;
            new_contrato.nm_tp_unidade = contrato.nm_tp_unidade;
            new_contrato.dt_conta = contrato.dt_conta;
            new_contrato.dt_mes_ref = contrato.dt_mes_ref;
            new_contrato.nm_tp_contrato = contrato.nm_tp_contrato;
            new_contrato.cd_user_alteracao = contrato.cd_user_alteracao;
            new_contrato.cd_user_inclusao = contrato.cd_user_inclusao;
            new_contrato.fl_contrato_ativo = contrato.fl_contrato_ativo;
            new_contrato.nr_contrato = contrato.nr_contrato;
            new_contrato.fl_renovacao = contrato.fl_renovacao;
            new_contrato.cd_fornecedor_fk = contrato.cd_fornecedor_fk;
            await new_contrato.save();
        } catch (error) {
            throw new Error("");
        }
    }
}