import { Circuito } from "../models/Circuito.models";

export class CircuitoRepo {
    static async save(circuito: Circuito): Promise<void> {
        try {
            await Circuito.create({
                nr_velocidade: circuito.nr_velocidade,
                nr_circuito: circuito.nr_circuito,
                cd_circuito_pk: circuito.cd_circuito_pk,
                cd_user_alteracao: circuito.cd_user_alteracao,
                cd_user_inclusao: circuito.cd_user_inclusao,
                fl_circuito_ativo: circuito.fl_circuito_ativo,
                cd_conta_fk: circuito.cd_conta_fk,
            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Circuito[]> {
        try {
            return await Circuito.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(circuitoId: number): Promise<void> {
        try {
            const new_circuito = await Circuito.findOne({
                where: {
                    cd_circuito_pk: circuitoId,
                },
            })
            if (!new_circuito) {
                throw new Error("Erro");
            }

            await new_circuito.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(circuitoId: number): Promise<Circuito> {
        try {
            const new_circuito = await Circuito.findOne({
                where: {
                    cd_circuito_pk: circuitoId,
                },
            })
            if (!new_circuito) {
                throw new Error("Erro");
            }

            return new_circuito
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(circuito: Circuito): Promise<void> {
        try {
            const new_circuito = await Circuito.findOne({
                where: {
                    cd_circuito_pk: circuito.cd_circuito_pk,
                },
            })
            if (!new_circuito) {
                throw new Error("Erro");
            }
            new_circuito.nr_velocidade = circuito.nr_velocidade;
            new_circuito.nr_circuito = circuito.nr_circuito;
            new_circuito.cd_user_alteracao = circuito.cd_user_alteracao;
            new_circuito.cd_user_inclusao = circuito.cd_user_inclusao;
            new_circuito.fl_circuito_ativo = circuito.fl_circuito_ativo;
            new_circuito.cd_conta_fk = circuito.cd_conta_fk;
            await new_circuito.save();
        } catch (error) {
            throw new Error("");
        }
    }
}