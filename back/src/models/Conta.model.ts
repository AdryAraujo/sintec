import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Contrato } from "./Contrato.model";

@Table({
    tableName: 'tb_conta',
    schema: 'contas',
    timestamps: true
})
export class Conta extends Model {
    public static CONTA_TABLE_NAME = "tb_Conta" as string;
    public static CONTA_DT_VENC = "dt_venc" as string;
    public static CONTA_VLR_CONTA = "vlr_conta" as string;
    public static CONTA_NR_CONTA = "nr_conta" as string;
    public static CONTA_CD_CONTA_pk = "cd_conta_pk" as string;
    public static CONTA_DT_MES_REF = "dt_mes_ref" as string;
    public static CONTA_NM_UNI_CONSU = "nm_uni_consu" as string;
    public static CONTA_DT_ALTERACAO = "dt_alteracao" as string;
    public static CONTA_DT_INCLUSAO = "dt_inclusao" as string;
    public static CONTA_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static CONTA_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static CONTA_FL_ATIVO = "fl_ativo" as string;
    public static CONTA_NR_PERIODO = "nr_periodo" as string;
    public static CONTA_VLR_TOTAL = "vlr_total" as string;
    public static CONTA_CD_CONTRATO_FK = "cd_contrato_fk" as string;

    @Column({
        type: DataType.DATEONLY,
        field: Conta.CONTA_DT_VENC,
    })
    dt_venc!: Date;

    @Column({
        type: DataType.BIGINT,
        field: Conta.CONTA_VLR_CONTA,
    })
    vlr_conta!: number;

    @Column({
        type: DataType.STRING(200),
        field: Conta.CONTA_NR_CONTA,
    })
    nr_conta!: number;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Conta.CONTA_CD_CONTA_pk,
    })
    cd_conta_pk!: number;

    @Column({
        type: DataType.DATEONLY,
        field: Conta.CONTA_DT_MES_REF,
    })
    dt_mes_ref!: Date;

    @Column({
        type: DataType.STRING,
        field: Conta.CONTA_NM_UNI_CONSU,
    })
    nm_uni_consu!: string;

    @Column({
        type: DataType.BIGINT,
        field: Conta.CONTA_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Conta.CONTA_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Conta.CONTA_VLR_TOTAL,
    })
    vlr_total!: number;

    @Column({
        type: DataType.INTEGER,
        field: Conta.CONTA_NR_PERIODO,
    })
    nr_periodo!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Conta.CONTA_FL_ATIVO,
    })
    fl_ativo!: boolean;

    @ForeignKey(() => Contrato)
    @Column
    cd_contrato_fk: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Conta.CONTA_DT_INCLUSAO,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Conta.CONTA_DT_ALTERACAO,
    })
    updatedAt!: Date;
}
