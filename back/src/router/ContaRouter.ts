import CircuitoController from "../controller/CircuitoController";
import ContaController from "../controller/ContaController";
import ContratoController from "../controller/ContratoController";
import validate from "../helper/validate";
import { updateContaSchema } from "../schema/ContaSchema";
import BaseRoutes from "./base/BaseRouter";

class ContaRoutes extends BaseRoutes {
    routes(): void {

        //Conta
        this.router.post("/createConta", ContaController.create);
        this.router.get("/procurarConta", ContaController.getAll);
        this.router.patch(
            "/alterarConta/:cd_conta_pk",
            validate(updateContaSchema),
            ContaController.update
          );
        this.router.delete("/delete/:cd_conta_pk", ContaController.delete);
        this.router.get("/procurarConta/:cd_conta_pk", ContaController.findById);

        // Contrato
        this.router.post("/createContrato", ContratoController.create);
        this.router.get("/procurarContrato", ContratoController.getAll);
        this.router.patch(
            "/alterarContrato/:cd_contrato_pk",
            ContratoController.update
          );
        this.router.delete("/delete/:cd_contrato_pk", ContratoController.delete);
        this.router.get("/procurarContrato/:cd_contrato_pk", ContratoController.findById);

        //Circuito
        this.router.post("/createCircuito", CircuitoController.create);
        this.router.get("/procurarCircuito", CircuitoController.getAll);
        this.router.patch(
            "/alterarCircuito/:cd_circuito_pk",
            CircuitoController.update
          );
        this.router.delete("/delete/:cd_circuito_pk", CircuitoController.delete);
        this.router.get("/procurarCircuito/:cd_circuito_pk", CircuitoController.findById);

    }
}

export default new ContaRoutes().router;