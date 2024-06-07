const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const ProjetoController = require("./Controllers/ProjetoController");
const AuthController = require("./Controllers/AuthController");

const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const ProjetoValidator = require("./Validators/ProjetoValidator");
const AuthValidator = require("./Validators/AuthValidator");

const verificarJwt = require("./Middlewares/VerificarJWT");
const verificarUsuario = require("./Middlewares/VerificarUsuario");

const rotas = Router();

//Usuarios
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);

rotas.get("/usuarios", UsuarioController.read);

    rotas.delete('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);

rotas.put(
  "/usuarios/:id",
  verificarJwt,
  verificarUsuario,
  UsuarioValidator.update,
  UsuarioController.update
);

//Sessoes
rotas.post(
  "/sessoes",
  verificarJwt,
  verificarUsuario,
  SessoesValidator.create,
  SessoesController.create
);

rotas.get("/sessoes", verificarJwt, SessoesController.read);

rotas.delete(
  "/sessoes/:id_usuario",
  verificarJwt,
  verificarUsuario,
  SessoesValidator.destroy,
  SessoesController.delete
);

//rotas.put('/sessoes/:id', verificarJwt, SessoesValidator.update, SessoesController.update);

//Projeto
rotas.post("/projeto", ProjetoValidator.create, ProjetoController.create);

rotas.get("/projeto", ProjetoController.read);

rotas.delete(
  "/projeto/:id",
  ProjetoValidator.destroy,
  ProjetoController.delete
);

rotas.put("/projeto/:id", ProjetoValidator.update, ProjetoController.update);

//Auth
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;


    module.exports = rotas;
