const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const ProjetoController = require("./Controllers/ProjetoController");

const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const ProjetoValidator = require("./Validators/ProjetoValidator");

const rotas = Router();

//Usuarios
    rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);

    rotas.get('/usuarios', UsuarioController.read);

    rotas.delete('/usuarios/:id', UsuarioValidator.destroy, UsuarioController.delete);

    rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);


    //Sessoes
    rotas.post('/sessoes', SessoesValidator.create, SessoesController.create);

    rotas.get('/sessoes', SessoesController.read);

    rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesController.delete);

    rotas.put('/sessoes/:id', SessoesValidator.update, SessoesController.update);


    rotas.post('/projeto', ProjetoValidator.create, ProjetoController.create);

    rotas.get('/projeto', ProjetoController.read);

    rotas.delete('/projeto/:id', ProjetoValidator.destroy, ProjetoController.delete);

    rotas.put('/projeto/:id', ProjetoValidator.update, ProjetoController.update);


    module.exports = rotas;