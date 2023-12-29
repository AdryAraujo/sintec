import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import UsuarioRouter from "./router/UsuarioRouter";
import ContaRouter from "./router/ContaRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("welcome home");
    });
    this.app.use("/api/usuario", UsuarioRouter);
    this.app.use("/api/conta", ContaRouter);

  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log("✅ Server started successfully!");
});