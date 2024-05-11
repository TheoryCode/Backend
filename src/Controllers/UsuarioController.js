const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
    async crate (re, res) {
 const usuario = await UsuarioModel.create(req.body);

 return re.status(200).json(usuario);
    }
    read (re, res) {
        
    }
    update (re, res) {
        
    }
    delete (re, res) {
        
    }
}

module.exports = new UsuarioController();