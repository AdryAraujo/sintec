import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Municipio } from "./Municipio.model";

@Table({
    tableName: 'tb_unidade_administrativa',
    timestamps: false
})
export class Unidade_adm extends Model {
    public static UNIDADE_ADM_TABLE_NAME = "tb_unidade_administrativa" as string;
    public static UNIDADE_ADM_nm_unidade = "nm_unidade" as string;
    public static UNIDADE_ADM_nm_logradouro = "nm_logradouro" as string;
    public static UNIDADE_ADM_cd_estrutura_adm_siga = "cd_estrutura_adm_siga" as string;
    public static UNIDADE_ADM_CD_unidade_pk = "cd_unidade_pk" as string;
    public static UNIDADE_ADM_cd_cep = "cd_cep" as string;
    public static UNIDADE_ADM_cd_inep = "cd_inep" as string;
    public static UNIDADE_ADM_nm_email = "nm_email" as string;
    public static UNIDADE_ADM_nm_dre = "nm_dre" as string;
    public static UNIDADE_ADM_nm_sigla_unidade = "nm_sigla_unidade" as string;
    public static UNIDADE_ADM_nm_tp_unidade = "nm_tp_unidade" as string;
    public static UNIDADE_ADM_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static UNIDADE_ADM_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static UNIDADE_ADM_FL_unidade_adm_ATIVO = "fl_unidade_adm_ativo" as string;
    public static UNIDADE_ADM_nr_telefone1 = "nr_telefone1" as string;
    public static UNIDADE_ADM_nr_logradouro = "nr_logradouro" as string;
    public static UNIDADE_ADM_NR_CELULAR = "nr_celular" as string;
    public static UNIDADE_ADM_NR_TELEFONE2 = "nr_telefone2" as string;
    public static UNIDADE_ADM_NM_complemento = "nm_complemento" as string;
    public static UNIDADE_ADM_CD_MUNICIPIO_FK = "cd_municipio_fk" as string;
   
    @Column({
        type: DataType.STRING(100),
        field: Unidade_adm.UNIDADE_ADM_nm_dre,
    })
    nm_dre!: string;

    @Column({
        type: DataType.STRING(10),
        field: Unidade_adm.UNIDADE_ADM_nm_sigla_unidade,
    })
    nm_sigla_unidade!: string;

    @Column({
        type: DataType.STRING(50),
        field: Unidade_adm.UNIDADE_ADM_nm_tp_unidade,
    })
    nm_tp_unidade!: string;

    @Column({
        type: DataType.STRING(15),
        field: Unidade_adm.UNIDADE_ADM_cd_inep,
    })
    cd_inep!: string;
    
    @Column({
        type: DataType.STRING,
        field: Unidade_adm.UNIDADE_ADM_nm_unidade,
    })
    nm_unidade!: string;

    @Column({
        type: DataType.STRING,
        field: Unidade_adm.UNIDADE_ADM_nm_logradouro,
    })
    nm_logradouro!: string;

    @Column({
        type: DataType.INTEGER,
        field: Unidade_adm.UNIDADE_ADM_cd_estrutura_adm_siga,
    })
    cd_estrutura_adm_siga!: number;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Unidade_adm.UNIDADE_ADM_CD_unidade_pk,
    })
    cd_unidade_pk!: number;

    @Column({
        type: DataType.STRING(8),
        field: Unidade_adm.UNIDADE_ADM_cd_cep,
    })
    cd_cep!: string;

    @Column({
        type: DataType.STRING(100),
        field: Unidade_adm.UNIDADE_ADM_nm_email,
    })
    nm_email!: string;

    @Column({
        type: DataType.BIGINT,
        field: Unidade_adm.UNIDADE_ADM_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Unidade_adm.UNIDADE_ADM_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.STRING(11),
        field: Unidade_adm.UNIDADE_ADM_nr_telefone1,
    })
    nr_telefone1!: string;

    @Column({
        type: DataType.BOOLEAN,
        field: Unidade_adm.UNIDADE_ADM_FL_unidade_adm_ATIVO,
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
        type: DataType.STRING(11),
        field: Unidade_adm.UNIDADE_ADM_NR_CELULAR,
    })
    nr_celular!: string;

    @Column({
        type: DataType.STRING(100),
        field: Unidade_adm.UNIDADE_ADM_NM_complemento,
    })
    nm_complemento!: string;

    @Column({
        type: DataType.STRING(5),
        field: Unidade_adm.UNIDADE_ADM_nr_logradouro,
    })
    nr_logradouro!: string;

    @Column({
        type: DataType.STRING(11),
        field: Unidade_adm.UNIDADE_ADM_NR_TELEFONE2,
    })
    nr_telefone2!: string;

    @ForeignKey(() => Municipio)
    @Column
    cd_municipio_fk!: number;
}
