const Agendamento = require('../model/entities/Agendamento');
const AgendamentoBO = require('../model/bo/AgendamentoBO');

const Atendimento = require('../model/entities/Atendimento');
const AtendimentoBO = require('../model/bo/AtendimentoBO');

const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

class AgendamentoController {

    async obterAgendamento(req, res) {

        if (req.params.id) {
            // Obter agendamento por ID 
            let agendamento = new Agendamento();
            agendamento.id = req.params.id;
            agendamento = await AgendamentoBO.obterAgendamento(agendamento);
            res.send(agendamento);

        } else {
            // Obter todas as agendamentos
            let agendamentos = await AgendamentoBO.obterAgendamentos();
            res.send(agendamentos);
        }

    }

    async incluirAgendamento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.id_atendimento;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        let agendamento = new Agendamento(null, req.body.data_hora_agendamento, atendimento, usuario);
        let id = await AgendamentoBO.incluirAgendamento(agendamento);

        res.status(201).json({
            status: req.body.status,
            message: 'agendamento inserido com sucesso',
            id: id
        });

    }

    async alterarAgendamento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.id_atendimento;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        let agendamento = new Agendamento(req.params.id, req.body.data_hora_agendamento, atendimento, usuario);
        await AgendamentoBO.alterarAgendamento(agendamento);

        res.status(200).json({
            status: req.body.status,
            message: 'agendamento atualizado com sucesso'
        });

    }

    async excluirAgendamento(req, res) {

        if (req.params.id) {
            let agendamento = new Agendamento();
            agendamento.id = req.params.id;
            await AgendamentoBO.excluirAgendamento(agendamento);

            res.status(200).json({
                status: req.body.status,
                message: 'agendamento excluido com sucesso.'
            });
        }

    }

}

module.exports = AgendamentoController;