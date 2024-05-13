const SessoesModel = require("../Models/SessoesModel");

class SessoesController {
    async create (req, res) {
 const Sessoes = await SessoesModel.create(req.body);

 return res.status(200).json(Sessoes);
    }
  async read (req, res) {
    const sessoes = await SessoesModel.find();

    return res.status(200).json(sessoes);
        
    }
    update (req, res) {
        
    }
    async delete (req, res) {
        const { id } = req.params

        await SessoesModel.findByIdAndDelete(id);

        return res.status(200).json({"mensagem":"sessão deletado com sucesso!"});
        
    }
}

module.exports = new SessoesController();