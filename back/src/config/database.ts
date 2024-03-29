import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Usuario } from "../models/Usuario.model";
import { Conta } from "../models/Conta.model";
import { Contrato } from "../models/Contrato.model";
import { Municipio } from "../models/Municipio.model";
import { Bairro } from "../models/Bairro.model";
import { Pais } from "../models/Pais.model";
import { Estado } from "../models/Estado.model";
import { Unidade_adm } from "../models/Unidade_adm.model";
import { Fornecedor } from "../models/Fornecedor.model";
dotenv.config();

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as unknown as string;

  constructor() {
    this.connectToPostgreSQL();
  }

  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: "postgres",
      models: [Usuario, Conta, Contrato, Municipio, Bairro, Pais, Estado, Unidade_adm, Fornecedor]
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Conexão feita com sucesso.");
      })
      .catch((err) => {
        console.error("Não foi possível se conectar com o banco:", err);
      });
  }
}

export default Database;