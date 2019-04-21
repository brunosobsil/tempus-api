const dao = require('../dao/TesteDAO');

class TesteBO {
    
    obterTeste(teste){
        return dao.obterTeste(teste);
    }
}

module.exports = new TesteBO();