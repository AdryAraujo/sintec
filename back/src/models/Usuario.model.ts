import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: 'tb_usuario',
  timestamps: true
})
export class Usuario extends Model {
  public static USUARIO_TABLE_NAME = "tb_usuario" as string;
  public static USUARIO_LOGIN_REDE = "login_rede" as string;
  public static USUARIO_SENHA_REDE = "senha_rede" as string;
  public static USUARIO_NM_USUARIO = "nm_usuario" as string;
  public static USUARIO_CD_USUARIO_pk = "cd_usuario_pk" as string;
  public static USUARIO_FL_USUARIO_ATIVO = "fl_usuario_ativo" as string;
  public static USUARIO_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
  public static USUARIO_DT_ALTERACAO = "dt_alteracao" as string;
  public static USUARIO_DT_INCLUSAO = "dt_inclusao" as string;
  public static USUARIO_CD_USER_ALTERACAO = "cd_user_alteracao" as string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: Usuario.USUARIO_DT_INCLUSAO,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: Usuario.USUARIO_DT_ALTERACAO,
  })
  updatedAt!: Date;

  @Column({
    type: DataType.STRING(100),
    field: Usuario.USUARIO_LOGIN_REDE,
  })
  login_rede!: string;

  @Column({
    type: DataType.STRING,
    field: Usuario.USUARIO_SENHA_REDE,
  })
  senha_rede!: string;

  @Column({
    type: DataType.STRING(200),
    field: Usuario.USUARIO_NM_USUARIO,
  })
  nm_usuario!: string;

  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: Usuario.USUARIO_CD_USUARIO_pk,
  })
  cd_usuario_pk!: number;

  @Column({
    type: DataType.BOOLEAN,
    field: Usuario.USUARIO_FL_USUARIO_ATIVO,
    allowNull: true,
  })
  fl_usuario_ativo!: boolean;

  @Column({
    type: DataType.BIGINT,
    field: Usuario.USUARIO_CD_USER_INCLUSAO,
    allowNull: true,
  })
  cd_user_inclusao!: number;

  @Column({
    type: DataType.DATEONLY,
    field: Usuario.USUARIO_DT_ALTERACAO,
    allowNull: true,
  })
  dt_alteracao!: Date;

  @Column({
    type: DataType.DATEONLY,
    field: Usuario.USUARIO_DT_INCLUSAO,
    allowNull: true,
  })
  dt_inclusao!: Date;

  @Column({
    type: DataType.BIGINT,
    field: Usuario.USUARIO_CD_USER_ALTERACAO,
    allowNull: true,
  })
  cd_user_alteracao!: number;
}