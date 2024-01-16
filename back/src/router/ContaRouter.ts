import CircuitoController from "../controller/CircuitoController";
import ContaController from "../controller/ContaController";
import ContratoController from "../controller/ContratoController";
import validate from "../helper/validate";
import { auth } from "../middleware/AuthMiddleware";
import { updateContaSchema } from "../schema/ContaSchema";
import BaseRoutes from "./base/BaseRouter";

class ContaRoutes extends BaseRoutes {
  routes(): void {

    //Conta
    this.router.post("/createConta", auth, ContaController.create);
    this.router.get("/procurarConta", auth, ContaController.getAll);
    this.router.patch(
      "/alterarConta/:cd_conta_pk", auth,
      ContaController.update
    );
    this.router.delete("/delete/:cd_conta_pk", auth, ContaController.delete);
    this.router.get("/procurarConta/:cd_conta_pk", auth, ContaController.findById);

    // Contrato
    this.router.post("/createContrato", auth, ContratoController.create);
    this.router.get("/procurarContrato", auth, ContratoController.getAll);
    this.router.patch(
      "/alterarContrato/:cd_contrato_pk", auth,
      ContratoController.update
    );
    this.router.delete("/delete/:cd_contrato_pk", auth, ContratoController.delete);
    this.router.get("/procurarContrato/:cd_contrato_pk", auth, ContratoController.findById);

    //Circuito
    this.router.post("/createCircuito", auth, CircuitoController.create);
    this.router.get("/procurarCircuito", auth, CircuitoController.getAll);
    this.router.patch(
      "/alterarCircuito/:cd_circuito_pk", auth,
      CircuitoController.update
    );
    this.router.delete("/delete/:cd_circuito_pk", auth, CircuitoController.delete);
    this.router.get("/procurarCircuito/:cd_circuito_pk", auth, CircuitoController.findById);

  }
}

export default new ContaRoutes().router;