import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Pais } from "./Pais.model";

@Table({
    tableName: 'tb_estado',
    timestamps: false
})
export class Estado extends Model {
    public static ESTADO_TABLE_NAME = "tb_estado" as string;
    public static ESTADO_nm_estado = "nm_estado" as string;
    public static ESTADO_sigla_uf = "sigla_uf" as string;
    public static ESTADO_CD_estado_pk = "cd_estado_pk" as string;
    public static ESTADO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static ESTADO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static ESTADO_FL_estado_ATIVO = "fl_estado_ativo" as string;
    public static ESTADO_CD_pais_FK = "cd_pais_fk" as string;
   
    @Column({
        type: DataType.STRING(100),
        field: Estado.ESTADO_nm_estado,
    })
    nm_estado!: string;

    @Column({
        type: DataType.STRING(2),
        field: Estado.ESTADO_sigla_uf,
    })
    sigla_uf!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Estado.ESTADO_CD_estado_pk,
    })
    cd_estado_pk!: number;

    @Column({
        type: DataType.BIGINT,
        field: Estado.ESTADO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Estado.ESTADO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Estado.ESTADO_FL_estado_ATIVO,
    })
    fl_estado_ativo!: boolean;

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

    @ForeignKey(() => Pais)
    @Column
    cd_pais_fk!: number;
}
