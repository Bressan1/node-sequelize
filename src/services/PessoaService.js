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

    async pegaPessoasEscopoTodos (){
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }


};
module.exports = PessoaService;