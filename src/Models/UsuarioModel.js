const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    
    nome: String,
    cargo : String,
    email : String,
    senha : String,
    nivel : Boolean
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;