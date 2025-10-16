const Services = require('./Services.js');

class PessoaService extends Services{
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasAtivasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listarMatriculas = await estudante.getAulasMatriculadas();
        return listarMatriculas;
    }

    //pegaTodasAsMatriculasPorEstudante
        async pegaTodasAsMatriculasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listarMatriculas = await estudante.getTodassMatriculadas();
        return listarMatriculas;
    }

    async pegaPessoasEscopoTodos (){
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }


};
module.exports = PessoaService;