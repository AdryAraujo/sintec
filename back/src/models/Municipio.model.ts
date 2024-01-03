import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'tb_municipio',
    timestamps: false
})
export class Municipio extends Model {
    public static MUNICIPIO_TABLE_NAME = "tb_municipio" as string;
    public static MUNICIPIO_nm_municipio = "nm_municipio" as string;
    public static MUNICIPIO_nm_cep = "nm_cep" as string;
    public static MUNICIPIO_CD_municipio = "cd_municipio" as string;
    public static MUNICIPIO_nm_abreviado_municipio = "nm_abreviado_municipio" as string;
    public static MUNICIPIO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static MUNICIPIO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static MUNICIPIO_FL_MUNICIPIO_ATIVO = "fl_municipio_ativo" as string;
    public static MUNICIPIO_nr_ibge = "nr_ibge" as string;
    public static MUNICIPIO_TB_ESTADO_CD_ESTADO_FK = "tb_estado_cd_estado_fk" as string;
   
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
        field: Municipio.MUNICIPIO_CD_municipio,
    })
    cd_municipio!: number;

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
          model: Estado,
          key: 'cd_estado'}
    })
    tb_estado_cd_estado_fk!: number;

}
