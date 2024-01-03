import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'tb_pais',
    timestamps: false
})
export class Pais extends Model {
    public static ESTADO_TABLE_NAME = "tb_pais" as string;
    public static ESTADO_nm_pais = "nm_pais" as string;
    public static ESTADO_sigla_pais = "sigla_pais" as string;
    public static ESTADO_CD_pais = "cd_pais" as string;
    public static ESTADO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static ESTADO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static ESTADO_FL_PAIS_ATIVO = "fl_pais_ativo" as string;
    public static ESTADO_TB_pais_CD_pais_FK = "tb_pais_cd_pais_fk" as string;
   
    @Column({
        type: DataType.STRING(100),
        field: Pais.ESTADO_nm_pais,
    })
    nm_pais!: string;

    @Column({
        type: DataType.STRING(3),
        field: Pais.ESTADO_sigla_pais,
    })
    sigla_pais!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Pais.ESTADO_CD_pais,
    })
    cd_pais!: number;

    @Column({
        type: DataType.BIGINT,
        field: Pais.ESTADO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Pais.ESTADO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Pais.ESTADO_FL_PAIS_ATIVO,
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
}
