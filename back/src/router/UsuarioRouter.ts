import BaseRoutes from "./base/BaseRouter";
import UsuarioController from "../controller/UsuarioController";
import valcd_usuarioate from "../helper/validate";
import { createUsuarioSchema, updateUsuarioSchema } from "../schema/UsuarioSchema";
import validate from "../helper/validate";

class UsuarioRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", valcd_usuarioate(createUsuarioSchema), UsuarioController.create);
    this.router.patch(
      "/:cd_usuario",
      validate(updateUsuarioSchema),
      UsuarioController.update
    );
    this.router.delete("/:cd_usuario", UsuarioController.delete);
    this.router.get("", UsuarioController.findAll);
    this.router.get("/:cd_usuario", UsuarioController.findById);
  }
}

export default new UsuarioRoutes().router
