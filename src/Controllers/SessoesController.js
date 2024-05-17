const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");

class SessoesController {
  async create (req, res) {
    try {
      const sessoes = await SessoesModel.create(req.body);
      const usuarioExiste = await UsuarioModel.findById(req.body.id_usuario);
      
      if(!usuarioExiste){
        return res.status(404).json({message: "Usuário não encontrado"});
      }
   
      return res.status(200).json(sessoes);

    }catch (error){
      res.status(500).json({message: "Não foi possivel iniciar a sessão", error: error.message});
      
    }
      

    }
    
  async read(req, res){
    try {
      const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
      res.status(200).json(sessoes);
    } catch (error) {
        res.status(500).json({message: "A requisição falhou", error: error.message});
    }
      
  }

  async update (req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const sessoes = await SessoesModel.findByIdAndUpdate(id, updateData, { new: true });

      if (!sessoes) {
          return res.status(404).json({ mensagem: "Sessão não encontrada" });
      }

      return res.status(200).json(sessoes);
    }catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
    
  async delete (req, res) {
      try {
          const { id_usuario } = req.params;
          const sessaoEncontrada  = await SessoesModel.findOne({ id_usuario: id_usuario })

          if(!sessaoEncontrada){
            return res.status(404).json({message: "Sessão não encontrada"})
          }
          await sessaoEncontrada.deleteOne();

          return res.status(200).json({ mensagem: "Sessão deletada com sucesso!" });

      } catch (error) {
          return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SessoesController();
