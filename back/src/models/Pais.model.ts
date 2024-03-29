import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'tb_pais',
    timestamps: true
})
export class Pais extends Model {
    public static PAIS_TABLE_NAME = "tb_pais" as string;
    public static PAIS_nm_pais = "nm_pais" as string;
    public static PAIS_sigla_pais = "sigla_pais" as string;
    public static PAIS_CD_pais_pk = "cd_pais_pk" as string;
    public static PAIS_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static PAIS_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static PAIS_FL_PAIS_ATIVO = "fl_pais_ativo" as string;
    public static PAIS_DT_INCLUSAO = "dt_inclusao" as string;
    public static PAIS_DT_ALTERACAO = "dt_alteracao" as string;
   
    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Pais.PAIS_DT_INCLUSAO,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Pais.PAIS_DT_ALTERACAO,
    })
    updatedAt!: Date;

    @Column({
        type: DataType.STRING(100),
        field: Pais.PAIS_nm_pais,
    })
    nm_pais!: string;

    @Column({
        type: DataType.STRING(3),
        field: Pais.PAIS_sigla_pais,
    })
    sigla_pais!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Pais.PAIS_CD_pais_pk,
    })
    cd_pais_pk!: number;

    @Column({
        type: DataType.BIGINT,
        field: Pais.PAIS_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Pais.PAIS_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Pais.PAIS_FL_PAIS_ATIVO,
    })
    fl_pais_ativo!: boolean;

}
