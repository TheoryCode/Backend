const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    
    Nome : String,
    Cargo : String,
    Email : String,
    Senha : String,
    Nivel : Boolean
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;