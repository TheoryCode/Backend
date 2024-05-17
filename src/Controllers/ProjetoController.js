const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoController {
    async create (req, res) {
        try{
            const Projeto = await ProjetoModel.create(req.body);

            return res.status(200).json(Projeto);

        } catch (error) {
            res.status(500).json({message: "/ProjetoController: Deu ruim aqui no create!!", error: error.message});

        }
    }

  async read (req, res) {
    try {
 
          const Projetos = await ProjetoModel.find();
          return res.status(200).json(Projetos); 
    } catch (error) {
        res.status(500).json({message: "/ProjetoController: Deu ruim aqui no read!!", error: error.message});

    }
       
    }

   async update (req, res) {
    try {


         const{ id } = req.params;
        const Projeto = await ProjetoModel.findByIdAndUpdate(id, req.body, {new: true})

        return res.status(200).json(Projeto);
    } catch (error) {
        res.status(500).json({message: "/ProjetoController: Deu ruim aqui no update!!", error: error.message});

    }
       
        
    }
    async delete (req, res) {
        try {
             const { id } = req.params;

        await ProjetoModel.findByIdAndDelete(id);

        return res.status(200).json({"mensagem":"Projeto deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({message: "/ProjetoController: Deu ruim aqui no delete!!", error: error.message});
    
        }
           
    }
}

module.exports = new ProjetoController();