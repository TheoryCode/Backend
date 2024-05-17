const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
    async create (req, res) {
        try{
            const usuario = await UsuarioModel.create(req.body);

            const { senha , ...usuarioMenosSenha } = usuario.toObject()

            return res.status(200).json(usuarioMenosSenha);


        } catch (error) {
            res.status(500).json({message: "/UsuarioController: Deu ruim aqui no create!!", error: error.message});

        }
    }


  async read (req, res) {
    try {
          const usuarios = await UsuarioModel.find();

          return res.status(200).json(usuarios); 


    } catch (error) {
        res.status(500).json({message: "/UsuarioController: Deu ruim aqui no read!!", error: error.message});
  

    }
       
    }

   async update (req, res) {
    try {
        const{ id } = req.params;
        const usuarioEncontrado = await UsuarioModel.findById(id);

        if(!usuarioEncontrado){
            return res.status(404).json({message: "Usuário não encontrado"})
        }
        
        const usuario = await usuarioEncontrado.set(req.body).save();
        
        //const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, {new: true})
        return res.status(200).json(usuario);

    } catch (error) {
        res.status(500).json({message: "/UsuarioController: Deu ruim aqui no update!!", error: error.message});

    }
       
        
    }
    async delete (req, res) {
        try {
             const { id } = req.params;
             const usuarioEncontrado = await UsuarioModel.findById(id);

        if(!usuarioEncontrado){
            return res.status(404).json({message: "Usuário não encontrado"});
        }

        await usuarioEncontrado.deleteOne();

        return res.status(200).json({message:"usuario deletado com sucesso!"});

        } catch (error) {
            res.status(500).json({message: "/UsuarioController: Deu ruim aqui no delete!!", error: error.message});
    
        }
           
    }
}

module.exports = new UsuarioController();