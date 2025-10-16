const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res){
    const { estudanteId } = req.params;
    try {
      const listarMatriculas = await pessoasServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listarMatriculas);
    } catch (erro) {
      // erro
    }

  }
}

module.exports = PessoaController;