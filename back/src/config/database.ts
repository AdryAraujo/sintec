import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Usere } from "../model/Usere"
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
      models: [Usere],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Conexão feita com sucesso.");
        this.createTables(); // Chama o método para criar as tabelas após a conexão bem-sucedida
      })
      .catch((err) => {
        console.error("Não foi possível se conectar com o banco:", err);
      });
  }

  private async createTables() {
    await this.sequelize?.sync({ alter: true }); // Sincroniza os modelos com o banco de dados
    console.log("Tabelas criadas com sucesso.");
  }
}

export default Database;