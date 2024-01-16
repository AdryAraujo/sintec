import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Municipio } from "./Municipio.model";

@Table({
    tableName: 'tb_fornecedor',
    schema: 'contas',
    timestamps: true
})
export class Fornecedor extends Model {
    public static FORNECEDOR_TABLE_NAME = "tb_fornecedor" as string;
    public static FORNECEDOR_nm_fornecedor = "nm_fornecedor" as string;
    public static FORNECEDOR_nm_logradouro = "nm_logradouro" as string;
    public static FORNECEDOR_nr_cnpj = "nr_cnpj" as string;
    public static FORNECEDOR_CD_fornecedor_pk = "cd_fornecedor_pk" as string;
    public static FORNECEDOR_cd_cep = "cd_cep" as string;
    public static FORNECEDOR_nm_email = "nm_email" as string;
    public static FORNECEDOR_CD_USER_ALTERACAO = "cd_user_alteracao" as string;
    public static FORNECEDOR_CD_USER_INCLUSAO = "cd_user_inclusao" as string;
    public static FORNECEDOR_FL_FORNECEDOR_ATIVO = "fl_fornecedor_ativo" as string;
    public static FORNECEDOR_nr_cpf = "nr_cpf" as string;
    public static FORNECEDOR_nr_logradouro = "nr_logradouro" as string;
    public static FORNECEDOR_NR_INST_ESTADUAL = "nr_inst_estadual" as string;
    public static FORNECEDOR_NR_CELULAR = "nr_celular" as string;
    public static FORNECEDOR_NR_TELEFONE = "nr_telefone" as string;
    public static FORNECEDOR_NM_REPRESENTANTE = "nm_representante" as string;
    public static FORNECEDOR_CD_MUNICIPIO_FK = "cd_municipio_fk" as string;
    public static FORNECEDOR_DT_INCLUSAO = "dt_inclusao" as string;
    public static FORNECEDOR_DT_ALTERACAO = "dt_alteracao" as string;
   
    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Fornecedor.FORNECEDOR_DT_INCLUSAO,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: Fornecedor.FORNECEDOR_DT_ALTERACAO,
    })
    updatedAt!: Date;

    @Column({
        type: DataType.STRING(200),
        field: Fornecedor.FORNECEDOR_nm_fornecedor,
    })
    nm_fornecedor!: string;

    @Column({
        type: DataType.STRING,
        field: Fornecedor.FORNECEDOR_nm_logradouro,
    })
    nm_logradouro!: string;

    @Column({
        type: DataType.STRING(14),
        field: Fornecedor.FORNECEDOR_nr_cnpj,
    })
    nr_cnpj!: string

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: Fornecedor.FORNECEDOR_CD_fornecedor_pk,
    })
    cd_fornecedor_pk!: number;

    @Column({
        type: DataType.STRING(8),
        field: Fornecedor.FORNECEDOR_cd_cep,
    })
    cd_cep!: string;

    @Column({
        type: DataType.STRING(100),
        field: Fornecedor.FORNECEDOR_nm_email,
    })
    nm_email!: string;

    @Column({
        type: DataType.BIGINT,
        field: Fornecedor.FORNECEDOR_CD_USER_ALTERACAO,
    })
    cd_user_alteracao!: number;

    @Column({
        type: DataType.BIGINT,
        field: Fornecedor.FORNECEDOR_CD_USER_INCLUSAO,
    })
    cd_user_inclusao!: number;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_nr_cpf,
    })
    nr_cpf!: string;

    @Column({
        type: DataType.BOOLEAN,
        field: Fornecedor.FORNECEDOR_FL_FORNECEDOR_ATIVO,
    })
    fl_fornecedor_ativo!: boolean;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_CELULAR,
    })
    nr_celular!: string;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_INST_ESTADUAL,
    })
    nr_inst_estadual!: string;

    @Column({
        type: DataType.STRING(100),
        field: Fornecedor.FORNECEDOR_NM_REPRESENTANTE,
    })
    nm_representante!: string;

    @Column({
        type: DataType.STRING(5),
        field: Fornecedor.FORNECEDOR_nr_logradouro,
    })
    nr_logradouro!: string;

    @Column({
        type: DataType.STRING(11),
        field: Fornecedor.FORNECEDOR_NR_TELEFONE,
    })
    nr_telefone!: string;

    @ForeignKey(() => Municipio)
    @Column
    cd_municipio_fk!: number;
}
