import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Pais } from "./Pais.model";
import { Conta } from "./Conta.model";

@Table({
    tableName: 'tb_circuito',
    timestamps: false
})
export class Circuito extends Model {
    public static CIRCUITO_TABLE_NAME = "tb_circuito" as string;
    public static CIRCUITO_nr_velocidade = "nr_velocidade" as string;
    public static CIRCUITO_nr_circuito = "nr_circuito" as string;
    public static CIRCUITO_CD_circuito_pk = "cd_circuito_pk" as string;
    public static CIRCUITO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static CIRCUITO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static CIRCUITO_FL_circuito_ATIVO = "fl_circuito_ativo" as string;
    public static CIRCUITO_CD_conta_FK = "cd_conta_fk" as string;
   
    @Column({
        type: DataType.STRING(50),
        field: Circuito.CIRCUITO_nr_velocidade,
    })
    nr_velocidade!: string;

    @Column({
        type: DataType.STRING(50),
        field: Circuito.CIRCUITO_nr_circuito,
    })
    nr_circuito!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Circuito.CIRCUITO_CD_circuito_pk,
    })
    cd_circuito_pk!: number;

    @Column({
        type: DataType.BIGINT,
        field: Circuito.CIRCUITO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Circuito.CIRCUITO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Circuito.CIRCUITO_FL_circuito_ATIVO,
    })
    fl_CIRCUITO_ativo!: boolean;

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

    @ForeignKey(() => Conta)
    @Column
    cd_conta_fk!: number;
}
