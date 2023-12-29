import ContaController from "../controller/ContaController";
import { auth } from "../middleware/AuthMiddleware";
import BaseRoutes from "./base/BaseRouter";

class ContaRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/create", ContaController.create);
        this.router.get("/", ContaController.getAll);
        this.router.patch("/:cd_conta", ContaController.update);
        this.router.delete("/:cd_conta", ContaController.delete);
        this.router.get("/procurar/:cd_conta", ContaController.findById);
        // this.router.get("/identify", ContaController.identify);
    }
}

export default new ContaRoutes().router;