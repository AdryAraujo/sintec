import { Conta } from "../models/Conta.model";

export class ContaRepo {
    static async save(conta: Conta): Promise<void> {
        try {
            await Conta.create({
                dt_venc: conta.dt_venc,
                vlr_conta: conta.vlr_conta,
                nr_conta: conta.nr_conta,
                cd_conta: conta.cd_conta,
                dt_mes_ref: conta.dt_mes_ref,
                nm_uni_consu: conta.nm_uni_consu,
                cd_user_alteracao: conta.cd_user_alteracao,
                cd_user_inclusao: conta.cd_user_inclusao,
                fl_ativo: conta.fl_ativo,
                nr_periodo: conta.nr_periodo,
                vlr_total: conta.vlr_total,
                tb_contrato_cd_contrato_fk: conta.tb_contrato_cd_contrato_fk,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Conta[]> {
        try {
            return await Conta.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(contaId: number): Promise<void> {
        try {
            const new_conta = await Conta.findOne({
                where: {
                    cd_conta: contaId,
                },
            })
            if (!new_conta) {
                throw new Error("Erro");
            }

            await new_conta.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(contaId: number): Promise<Conta> {
        try {
            const new_conta = await Conta.findOne({
                where: {
                    cd_conta: contaId,
                },
            })
            if (!new_conta) {
                throw new Error("Erro");
            }

            return new_conta
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(conta: Conta): Promise<void> {
        try {
            const new_conta = await Conta.findOne({
                where: {
                    cd_conta: conta.cd_conta,
                },
            })
            if (!new_conta) {
                throw new Error("Erro");
            }
            new_conta.dt_venc = conta.dt_venc;
            new_conta.vlr_conta = conta.vlr_conta;
            new_conta.nr_conta = conta.nr_conta;
            new_conta.dt_mes_ref = conta.dt_mes_ref;
            new_conta.nm_uni_consu = conta.nm_uni_consu;
            new_conta.cd_user_alteracao = conta.cd_user_alteracao;
            new_conta.cd_user_inclusao = conta.cd_user_inclusao;
            new_conta.fl_ativo = conta.fl_ativo;
            new_conta.nr_periodo = conta.nr_periodo;
            new_conta.vlr_total = conta.vlr_total;
            new_conta.tb_contrato_cd_contrato_fk = conta.tb_contrato_cd_contrato_fk;
            await new_conta.save();
        } catch (error) {
            throw new Error("");
        }
    }
}