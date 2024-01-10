import { Fornecedor } from "../models/Fornecedor.model";

export class FornecedorRepo {
    static async save(fornecedor: Fornecedor): Promise<void> {
        try {
            await Fornecedor.create({
                nm_fornecedor: fornecedor.nm_fornecedor,
                cd_fornecedor_pk: fornecedor.cd_fornecedor_pk,
                nm_logradouro: fornecedor.nm_logradouro,
                nr_cnpj: fornecedor.nr_cnpj,
                cd_cep: fornecedor.cd_cep,
                nm_email: fornecedor.nm_email,
                nr_cpf: fornecedor.nr_cpf,
                nr_logradouro: fornecedor.nr_logradouro,
                nr_inst_estadual: fornecedor.nr_inst_estadual,
                nr_celular: fornecedor.nr_celular,
                nr_telefone: fornecedor.nr_telefone,
                nm_representante: fornecedor.nm_representante,
                cd_user_alteracao: fornecedor.cd_user_alteracao,
                cd_user_inclusao: fornecedor.cd_user_inclusao,
                fl_fornecedor_ativo: fornecedor.fl_fornecedor_ativo,
                cd_municipio_fk: fornecedor.cd_municipio_fk

            });
        } catch (error) {
            console.log(error)
            throw new Error("Failed to save Conta!");
        }
    }

    static async getAll(): Promise<Fornecedor[]> {
        try {
            return await Fornecedor.findAll();
        } catch (error) {
            throw new Error("Failed to fetch all data!");
        }
    }

    static async delete(FornecedorRepoId: number): Promise<void> {
        try {
            const new_fornecedor = await Fornecedor.findOne({
                where: {
                    cd_fornecedor_pk: FornecedorRepoId,
                },
            })
            if (!new_fornecedor) {
                throw new Error("Erro");
            }

            await new_fornecedor.destroy()
        } catch (error) {
            throw new Error("");
        }
    }

    static async getById(FornecedorRepoId: number): Promise<Fornecedor> {
        try {
            const new_fornecedor = await Fornecedor.findOne({
                where: {
                    cd_fornecedor_pk: FornecedorRepoId,
                },
            })
            if (!new_fornecedor) {
                throw new Error("Erro");
            }

            return new_fornecedor
        } catch (error) {
            throw new Error("");
        }
    }

    static async update(fornecedor: Fornecedor): Promise<void> {
        try {
            const new_fornecedor = await Fornecedor.findOne({
                where: {
                    cd_fornecedor_pk: fornecedor.cd_fornecedor_pk,
                },
            })
            if (!new_fornecedor) {
                throw new Error("Erro");
            }

            new_fornecedor.nm_fornecedor = fornecedor.nm_fornecedor;
            new_fornecedor.nm_logradouro = fornecedor.nm_logradouro;
            new_fornecedor.nr_cnpj = fornecedor.nr_cnpj;
            new_fornecedor.cd_cep = fornecedor.cd_cep;
            new_fornecedor.nm_email = fornecedor.nm_email;
            new_fornecedor.nr_cpf = fornecedor.nr_cpf;
            new_fornecedor.nr_logradouro = fornecedor.nr_logradouro;
            new_fornecedor.nr_inst_estadual = fornecedor.nr_inst_estadual;
            new_fornecedor.nr_celular = fornecedor.nr_celular;
            new_fornecedor.nr_telefone = fornecedor.nr_telefone;
            new_fornecedor.nm_representante = fornecedor.nm_representante;
            new_fornecedor.cd_user_alteracao = fornecedor.cd_user_alteracao;
            new_fornecedor.cd_user_inclusao = fornecedor.cd_user_inclusao;
            new_fornecedor.fl_fornecedor_ativo = fornecedor.fl_fornecedor_ativo;
            new_fornecedor.cd_municipio_fk = fornecedor.cd_municipio_fk;
            await new_fornecedor.save();
        } catch (error) {
            throw new Error("");
        }
    }
}