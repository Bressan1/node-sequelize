class Controller {
    constructor(entidaeService){
        this.entidaeService = entidaeService;
    }

    async pegaTodas(req, res){
        try {
          const listaDePessoas = await database.Pessoa.findAll();
          return res.status(200).json(listaDePessoas);

        } catch (erro){
            
        }
    }
}