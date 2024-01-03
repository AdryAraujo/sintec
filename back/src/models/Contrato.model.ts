import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Fornecedor } from "./Fornecedor.model";

@Table({
    tableName: 'tb_contrato',
    schema: 'contas',
    timestamps: false
})
export class Contrato extends Model {
    public static CONTRATO_TABLE_NAME = "tb_contrato" as string;
    public static CONTRATO_nm_tp_servico = "nm_tp_servico" as string;
    public static CONTRATO_nm_tp_unidade = "nm_tp_unidade" as string;
    public static CONTRATO_dt_conta = "dt_conta" as string;
    public static CONTRATO_CD_CONtrato = "cd_contrato" as string;
    public static CONTRATO_DT_MES_REF = "dt_mes_ref" as string;
    public static CONTRATO_nm_tp_contrato = "nm_tp_contrato" as string;
    public static CONTRATO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static CONTRATO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static CONTRATO_FL_contrato_ATIVO = "fl_contrato_ativo" as string;
    public static CONTRATO_nr_contrato = "nr_contrato" as string;
    public static CONTRATO_FL_RENOVACAO = "fl_renovacao" as string;
    public static CONTRATO_TB_FORNECEDOR_CD_FORNECEDOR_FK = "tb_fornecedor_cd_fornrcedor_fk" as string;
   
    @Column({
        type: DataType.STRING,
        field: Contrato.CONTRATO_nm_tp_servico,
    })
    nm_tp_servico!: string;

    @Column({
        type: DataType.STRING,
        field: Contrato.CONTRATO_nm_tp_unidade,
    })
    nm_tp_unidade!: string;

    @Column({
        type: DataType.DATEONLY,
        field: Contrato.CONTRATO_dt_conta,
    })
    dt_conta!: Date;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Contrato.CONTRATO_CD_CONtrato,
    })
    cd_contrato!: number;

    @Column({
        type: DataType.DATEONLY,
        field: Contrato.CONTRATO_DT_MES_REF,
    })
    dt_mes_ref!: Date;

    @Column({
        type: DataType.STRING,
        field: Contrato.CONTRATO_nm_tp_contrato,
    })
    nm_tp_contrato!: string;

    @Column({
        type: DataType.BIGINT,
        field: Contrato.CONTRATO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Contrato.CONTRATO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.STRING(100),
        field: Contrato.CONTRATO_nr_contrato,
    })
    nr_contrato!: string;

    @Column({
        type: DataType.BOOLEAN,
        field: Contrato.CONTRATO_FL_contrato_ATIVO,
    })
    fl_contrato_ativo!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        field: Contrato.CONTRATO_FL_RENOVACAO,
    })
    fl_renovacao!: boolean;

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
          model: Fornecedor,
          key: 'cd_fornecedor'}
    })
    tb_fornecedor_cd_fornecedor_fk!: number;

}