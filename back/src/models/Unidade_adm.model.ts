import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Municipio } from "./Municipio.model";

@Table({
    tableName: 'tb_unidade_administrativa',
    timestamps: false
})
export class Fornecedor extends Model {
    public static FORNECEDOR_TABLE_NAME = "tb_unidade_administrativa" as string;
    public static FORNECEDOR_nm_unidade = "nm_unidade" as string;
    public static FORNECEDOR_nm_logradouro = "nm_logradouro" as string;
    public static FORNECEDOR_cd_estrutura_adm_siga = "cd_estrutura_adm_siga" as string;
    public static FORNECEDOR_CD_unidade = "cd_unidade" as string;
    public static FORNECEDOR_cd_cep = "cd_cep" as string;
    public static FORNECEDOR_cd_inep = "cd_inep" as string;
    public static FORNECEDOR_nm_email = "nm_email" as string;
    public static FORNECEDOR_nm_dre = "nm_dre" as string;
    public static FORNECEDOR_nm_sigla_unidade = "nm_sigla_unidade" as string;
    public static FORNECEDOR_nm_tp_unidade = "nm_tp_unidade" as string;
    public static FORNECEDOR_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static FORNECEDOR_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static FORNECEDOR_FL_unidade_adm_ATIVO = "fl_unidade_adm_ativo" as string;
    public static FORNECEDOR_nr_telefone1 = "nr_telefone1" as string;
    public static FORNECEDOR_nr_logradouro = "nr_logradouro" as string;
    public static FORNECEDOR_NR_INST_ESTADUAL = "nr_inst_estadual" as string;
    public static FORNECEDOR_NR_CELULAR = "nr_celular" as string;
    public static FORNECEDOR_NR_TELEFONE2 = "nr_telefone2" as string;
    public static FORNECEDOR_NM_complemento = "nm_complemento" as string;
    public static FORNECEDOR_TB_MUNICIPIO_CD_MUNICIPIO_FK = "tb_municipio_cd_municipio_fk" as string;
   
    @Column({
        type: DataType.STRING(10),
        field: Fornecedor.FORNECEDOR_nm_dre,
    })
    nm_dre!: string;

    @Column({
        type: DataType.STRING(10),
        field: Fornecedor.FORNECEDOR_nm_sigla_unidade,
    })
    nm_sigla_unidade!: string;

    @Column({
        type: DataType.STRING(50),
        field: Fornecedor.FORNECEDOR_nm_tp_unidade,
    })
    nm_tp_unidade!: string;

    @Column({
        type: DataType.STRING(15),
        field: Fornecedor.FORNECEDOR_cd_inep,
    })
    cd_inep!: string;
    
    @Column({
        type: DataType.STRING,
        field: Fornecedor.FORNECEDOR_nm_unidade,
    })
    nm_unidade!: string;

    @Column({
        type: DataType.STRING,
        field: Fornecedor.FORNECEDOR_nm_logradouro,
    })
    nm_logradouro!: string;

    @Column({
        type: DataType.INTEGER,
        field: Fornecedor.FORNECEDOR_cd_estrutura_adm_siga,
    })
    cd_estrutura_adm_siga!: number;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Fornecedor.FORNECEDOR_CD_unidade,
    })
    cd_unidade!: number;

    @Column({
        type: DataType.STRING(8),
        field: Fornecedor.FORNECEDOR_cd_cep,
    })
    cd_cep!: string;

    @Column({
        type: DataType.STRING(100),
        field: Fornecedor.FORNECEDOR_nm_email,
    })
    nm_email!: string;

    @Column({
        type: DataType.BIGINT,
        field: Fornecedor.FORNECEDOR_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Fornecedor.FORNECEDOR_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_nr_telefone1,
    })
    nr_telefone1!: string;

    @Column({
        type: DataType.BOOLEAN,
        field: Fornecedor.FORNECEDOR_FL_unidade_adm_ATIVO,
    })
    fl_unidade_adm_ativo!: boolean;

    @Column({
        allowNull: false,
        type: DataType.DATE
      })
    createdAt!: Date;

    @Column({
        allowNull: false,
        type: DataType.DATE
      })
    updatedAt!: Date;

    @Column({
        type: DataType.BIGINT,
        references: {
          model: Municipio,
          key: 'cd_municipio'}
    })
    tb_municipio_cd_municipio_fk!: number;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_CELULAR,
    })
    nr_celular!: string;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_INST_ESTADUAL,
    })
    nr_inst_estadual!: string;

    @Column({
        type: DataType.STRING(100),
        field: Fornecedor.FORNECEDOR_NM_complemento,
    })
    nm_complemento!: string;

    @Column({
        type: DataType.STRING(5),
        field: Fornecedor.FORNECEDOR_nr_logradouro,
    })
    nr_logradouro!: string;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_TELEFONE2,
    })
    nr_telefone2!: string;
}
