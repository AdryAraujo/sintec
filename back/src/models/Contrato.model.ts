import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
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
    public static CONTRATO_CD_CONtrato_pk = "cd_contrato_pk" as string;
    public static CONTRATO_DT_MES_REF = "dt_mes_ref" as string;
    public static CONTRATO_nm_tp_contrato = "nm_tp_contrato" as string;
    public static CONTRATO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static CONTRATO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static CONTRATO_FL_contrato_ATIVO = "fl_contrato_ativo" as string;
    public static CONTRATO_nr_contrato = "nr_contrato" as string;
    public static CONTRATO_FL_RENOVACAO = "fl_renovacao" as string;
    public static CONTRATO_CD_FORNECEDOR_FK = "cd_fornecedor_fk" as string;
   
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
        field: Contrato.CONTRATO_CD_CONtrato_pk,
    })
    cd_contrato_pk!: number;

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

    @ForeignKey(() => Fornecedor)
    @Column
    cd_fornecedor_fk!: number;

}
