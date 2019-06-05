const { Atendimento, Projeto } = require('../orm/models');

class ProjetoDAO {

    async obterProjeto(projeto) {
        const proj = await Projeto.findByPk(projeto.id, {
            include: [{model: Atendimento, as: 'atendimento'}]
        });
        return proj;
    }

    async obterProjetos() {
        const proj = await Projeto.findAll({
            include: [{model: Atendimento, as: 'atendimento'}]
        });
        return proj;
    }

    async obterHorasPorProjetos(dt_ini, dt_fin){
        let sqlQuery =  ' SELECT p.id, p.nome, EXTRACT(epoch FROM (SUM(os.data_hora_final - os.data_hora_inicio)) / 3600) as total' +
                        ' FROM "OrdemServicos" os' +
                        ' INNER JOIN "Agendamentos" a ON a.id = os.id_agendamento' +
                        ' INNER JOIN "Atendimentos" at ON at.id = a.id_atendimento' +
                        ' INNER JOIN "Projetos" p ON p.id_atendimento = at.id' +
                        ' WHERE os.data_hora_inicio >= (:dt1)' +
                        ' AND os.data_hora_final <= (:dt2)' +
                        ' GROUP BY p.id, p.nome';

        let result = await Projeto.sequelize.query(
            sqlQuery, {
            replacements: {dt1: dt_ini, dt2: dt_fin},
            type: Projeto.sequelize.QueryTypes.SELECT,
        });

        return result;
    }

    async incluirProjeto(projeto) {
        let newProjeto = await Projeto.create({
            nome: projeto.nome,
            descricao_atividades: projeto.descricaoAtividades,
            horas_estimadas: projeto.horasEstimadas,
            horas_realizadas: projeto.horasRealizadas,
            id_atendimento: projeto.atendimento.id
        });

        return newProjeto.id;
    }

    async alterarProjeto(projeto) {
        await Projeto.update({
            nome: projeto.nome,
            descricao_atividades: projeto.descricaoAtividades,
            horas_estimadas: projeto.horasEstimadas,
            horas_realizadas: projeto.horasRealizadas,
            id_atendimento: projeto.atendimento.id
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