import ContaController from "../controller/ContaController";
import validate from "../helper/validate";
import { updateContaSchema } from "../schema/ContaSchema";
import BaseRoutes from "./base/BaseRouter";

class ContaRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/create", ContaController.create);
        this.router.get("/", ContaController.getAll);
        this.router.patch(
            "/:cd_conta_pk",
            validate(updateContaSchema),
            ContaController.update
          );
        this.router.delete("/:cd_conta_pk", ContaController.delete);
        this.router.get("/procurar/:cd_conta_pk", ContaController.findById);
    }
}

export default new ContaRoutes().router;