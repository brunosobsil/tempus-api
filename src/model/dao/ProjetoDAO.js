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

    async incluirProjeto(projeto) {
        await Projeto.create({
            nome: projeto.nome,
            descricao_Atividades: projeto.descricao_atividades,
            horas_estimadas: projeto.horas_estimadas,
            horas_realizadas: projeto.horas_realizadas
        });
    }

    async alterarProjeto(projeto) {
        await Projeto.update({
            nome: projeto.nome,
            descricao_atividades: projeto.descricao_atividades,
            horas_estimadas: projeto.horas_estimadas,
            horas_realizadas: projeto.horas_realizadas
            
        }, {
            where: { id: projeto.id }
        });
    }

    async excluirProjeto(projeto) {
        
        await Projeto.destroy({
            where: { id: projeto.id }
        });
    }

}

module.exports = new ProjetoDAO();