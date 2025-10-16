const Services = require('./Services.js');

class PessoaService extends Services{
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(id) {
        const estudante = await this.pegaUmRegistroPorId(id);
        const listarMatriculas = await estudante.getAulasMatriculadas();
        return listarMatriculas;
      }
};
module.exports = PessoaService;