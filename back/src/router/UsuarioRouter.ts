import BaseRoutes from "./base/BaseRouter";
import UsuarioController from "../controller/UsuarioController";
import { createUsuarioSchema, updateUsuarioSchema } from "../schema/UsuarioSchema";
import validate from "../helper/validate";
import BairroController from "../controller/BairroController";
import FornecedorController from "../controller/FornecedorController";
import MunicipioController from "../controller/MunicipioController";
import EstadoController from "../controller/EstadoController";
import PaisController from "../controller/PaisController";
import Unidade_admController from "../controller/Unidade_admController";

class UsuarioRoutes extends BaseRoutes {
  public routes(): void {

    //Usuario
    this.router.post("/login", UsuarioController.login);
    this.router.post("/register", UsuarioController.register);
    this.router.patch(
      "alterarUsuario/:cd_usuario",
      validate(updateUsuarioSchema),
      UsuarioController.update
    );
    this.router.delete("/:cd_usuario", UsuarioController.delete);
    this.router.get("", UsuarioController.findAll);
    this.router.get("/procurarUser/:cd_usuario", UsuarioController.findById);
    this.router.get("/identify", UsuarioController.identify);

    //Fornecedor
    this.router.post("/createFornecedor", FornecedorController.create);
        this.router.get("/procurarFornecedor", FornecedorController.getAll);
        this.router.patch(
            "/alterarFornecedor/:cd_fornecedor_pk",
            FornecedorController.update
          );
        this.router.delete("/delete/:cd_fornecedor_pk", FornecedorController.delete);
        this.router.get("/procurarFornecedor/:cd_fornecedor_pk", FornecedorController.findById);

    //Municipio
    this.router.post("/createEstado", MunicipioController.create);
        this.router.get("/procurarMunicipio", MunicipioController.getAll);
        this.router.patch(
            "/alterarMunicipio/:cd_municipio_pk",
            MunicipioController.update
          );
        this.router.delete("/delete/:cd_municipio_pk", MunicipioController.delete);
        this.router.get("/procurarMunicipio/:cd_municipio_pk", MunicipioController.findById);

    //Estado
    this.router.post("/createEstado", EstadoController.create);
        this.router.get("/procurarEstado", EstadoController.getAll);
        this.router.patch(
            "/alterarEstado/:cd_estado_pk",
            EstadoController.update
          );
        this.router.delete("/delete/:cd_estado_pk", EstadoController.delete);
        this.router.get("/procurarEstado/:cd_estado_pk", EstadoController.findById);

    //Pais
    this.router.post("/createPais", PaisController.create);
        this.router.get("/procurarPais", PaisController.getAll);
        this.router.patch(
            "/alterarPais/:cd_pais_pk",
            PaisController.update
          );
        this.router.delete("/delete/:cd_pais_pk", PaisController.delete);
        this.router.get("/procurarPais/:cd_pais_pk", PaisController.findById);

    //Unidade_adm
    this.router.post("/createUnidade_adm", Unidade_admController.create);
    this.router.get("/procurarUnidade_adm", Unidade_admController.getAll);
    this.router.patch(
        "/alterarUnidade_adm/:cd_unidade_pk",
        Unidade_admController.update
      );
    this.router.delete("/delete/:cd_unidade_pk", Unidade_admController.delete);
    this.router.get("/procurarUnidade_adm/:cd_unidade_pk", Unidade_admController.findById);

    //Bairro
    this.router.post("/createBairroController", BairroController.create);
        this.router.get("/procurarc", BairroController.getAll);
        this.router.patch(
            "/alterarBairro/:cd_bairro_pk",
            BairroController.update
          );
        this.router.delete("/delete/:cd_bairro_pk", BairroController.delete);
        this.router.get("/procurarBairro/:cd_bairro_pk", BairroController.findById);
  }
}

export default new UsuarioRoutes().router
