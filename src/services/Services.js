const database = require('../models');

class Service {
    constructor(nomeDoModel){
        this.nomeDoModel = nomeDoModel;

    }

    async pegaTodosOsRegistros(){
        return database[this.model].findAll();
    }

}

module.exports = Services;