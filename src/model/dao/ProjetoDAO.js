const { Projeto } = require('../orm/models');

class ProjetoDAO {

    async obterProjeto(projeto) {
        const proj = await Projeto.findById(projeto.id);
        return proj;
    }

    async obterProjetos() {
        const proj = await Projeto.findAll();
        return proj;
    }

}

module.exports = new ProjetoDAO();