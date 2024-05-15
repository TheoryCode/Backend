const SessoesModel = require("../Models/SessoesModel");

class SessoesController {
  async create (req, res) {
    const Sessoes = await SessoesModel.create(req.body);
   
    return res.status(200).json(Sessoes);
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
            const { id } = req.params;
            await SessoesModel.findByIdAndDelete(id);
            return res.status(200).json({ mensagem: "Sessão deletada com sucesso!" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SessoesController();
