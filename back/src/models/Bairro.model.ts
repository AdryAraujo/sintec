import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Municipio } from "./Municipio.model";

@Table({
    tableName: 'tb_bairro',
    timestamps: false
})
export class Bairro extends Model {
    public static BAIRRO_TABLE_NAME = "tb_bairro" as string;
    public static BAIRRO_nm_bairro = "nm_bairro" as string;
    public static BAIRRO_CD_bairro_pk = "cd_bairro_pk" as string;
    public static BAIRRO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static BAIRRO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static BAIRRO_FL_BAIRRO_ATIVO = "fl_bairro_ativo" as string;
    public static BAIRRO_cd_municipio_fk = "cd_municipio_fk" as string;
   
    @Column({
        type: DataType.STRING(100),
        field: Bairro.BAIRRO_nm_bairro,
    })
    nm_bairro!: string;

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Bairro.BAIRRO_CD_bairro_pk,
    })
    cd_bairro_pk!: number;

    @Column({
        type: DataType.BIGINT,
        field: Bairro.BAIRRO_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Bairro.BAIRRO_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.BOOLEAN,
        field: Bairro.BAIRRO_FL_BAIRRO_ATIVO,
    })
    fl_bairro_ativo!: boolean;

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
    
    @ForeignKey(() => Municipio)
    @Column
    cd_municipio_fk!: number;
}
