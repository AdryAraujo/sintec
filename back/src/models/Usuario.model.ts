import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: 'tb_usuario',
  timestamps: false
})
export class Usuario extends Model {
  public static USUARIO_TABLE_NAME = "tb_usuario" as string;
  public static USUARIO_LOGIN_REDE = "login_rede" as string;
  public static USUARIO_SENHA_REDE = "senha_rede" as string;
  public static USUARIO_NM_USUARIO = "nm_usuario" as string;
  public static USUARIO_CD_USUARIO_pk = "cd_usuario_pk" as string;
  public static USUARIO_FL_USUARIO_ATIVO = "fl_usuario_ativo" as string;
  public static USUARIO_CD_USER_INCLUSAO_USUARIO = "cd_user_inclusao_usuario" as string;
  public static USUARIO_DT_ALTERACAO_USUARIO = "dt_alteracao_usuario" as string;
  public static USUARIO_DT_INCLUSAO_USUARIO = "dt_inclusao_usuario" as string;
  public static USUARIO_CD_USER_ALTERACAO_USUARIO = "cd_user_alteracao_usuario" as string;

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
    field: Usuario.USUARIO_CD_USER_INCLUSAO_USUARIO,
    allowNull: true,
  })
  cd_user_inclusao_usuario!: number;

  @Column({
    type: DataType.DATEONLY,
    field: Usuario.USUARIO_DT_ALTERACAO_USUARIO,
    allowNull: true,
  })
  dt_alteracao_usuario!: Date;

  @Column({
    type: DataType.DATEONLY,
    field: Usuario.USUARIO_DT_INCLUSAO_USUARIO,
    allowNull: true,
  })
  dt_inclusao_usuario!: Date;

  @Column({
    type: DataType.BIGINT,
    field: Usuario.USUARIO_CD_USER_ALTERACAO_USUARIO,
    allowNull: true,
  })
  cd_user_alteracao_usuario!: number;
}