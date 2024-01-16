import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Estado } from "./Estado.model";

@Table({
    tableName: 'tb_municipio',
    timestamps: true
})
export class Municipio extends Model {
    public static MUNICIPIO_TABLE_NAME = "tb_municipio" as string;
    public static MUNICIPIO_nm_municipio = "nm_municipio" as string;
    public static MUNICIPIO_nm_cep = "nm_cep" as string;
    public static MUNICIPIO_CD_municipio_pk = "cd_municipio_pk" as string;
    public static MUNICIPIO_nm_abreviado_municipio = "nm_abreviado_municipio" as string;
    public static MUNICIPIO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static MUNICIPIO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static MUNICIPIO_FL_MUNICIPIO_ATIVO = "fl_municipio_ativo" as string;
    public static MUNICIPIO_nr_ibge = "nr_ibge" as string;
    public static MUNICIPIO_CD_ESTADO_FK = "cd_estado_fk" as string;
    public static MUNICIPIO_DT_INCLUSAO = "dt_inclusao" as string;
    public static MUNICIPIO_DT_ALTERACAO = "dt_alteracao" as string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Municipio.MUNICIPIO_DT_INCLUSAO,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Municipio.MUNICIPIO_DT_ALTERACAO,
    })
    updatedAt!: Date;

    @Column({
        type: DataType.STRING(100),
        field: Municipio.MUNICIPIO_nm_municipio,
    })
    nm_municipio!: string;

    @Column({
        type: DataType.STRING(8),
        field: Municipio.MUNICIPIO_nm_cep,
    })
    nm_cep!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Municipio.MUNICIPIO_CD_municipio_pk,
    })
    cd_municipio_pk!: number;

    @Column({
        type: DataType.STRING(50),
        field: Municipio.MUNICIPIO_nm_abreviado_municipio,
    })
    nm_abreviado_municipio!: string;

    @Column({
        type: DataType.BIGINT,
        field: Municipio.MUNICIPIO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Municipio.MUNICIPIO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.INTEGER,
        field: Municipio.MUNICIPIO_nr_ibge,
    })
    nr_ibge!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Municipio.MUNICIPIO_FL_MUNICIPIO_ATIVO,
    })
    fl_municipio_ativo!: boolean;
    
    @ForeignKey(() => Estado)
    @Column
    cd_estado_fk!: number;

}
