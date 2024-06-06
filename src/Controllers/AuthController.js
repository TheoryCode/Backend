const UsuarioModel = require ("../Models/UsuarioModel");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const dotenv = require ("dotenv");


class AuthController {

    async login(req, res) {

        try{

            const { email, senha } = req.body

            const usuarioConfirmado = await UsuarioModel
            .findOne({ email: email })
            .select("+senha");

            
            if(!usuarioConfirmado){
                return res.status(403).json({message: "E-mail ou Senha inválidos"});
            }

            const ehCorespondente = await bcrypt.compare( senha, usuarioConfirmado.senha );

            if(!(senha === usuarioConfirmado.senha)){
                return res.status(403).json({message: "E-mail ou Senha inválidos"});
            }

            const {senha: hashedSenha, ...usuario } = usuarioConfirmado.toObject();

            const token = jwt.sign( usuario, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN, });

            req.usuarioId = usuario._id
           // console.log(req.usuarioId);
            
            
            // const _id = usuarioConfirmado.findOne(_id);
            // console.log( _id );
            // module.exports = _id;

            res.status(200).json({ token });

        }catch (error){

            res.status(500).json({
                message: "/AuthController: Deu ruim aqui no Auth", error: error.message 
            });
        }
    }
}

module.exports = new AuthController();