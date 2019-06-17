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

        } else if(req.params.data_inicio && req.params.data_final){

            // Obter agendamentos por Periodo
            let dt_ini = new Date(req.params.data_inicio).toUTCString();
            let dt_fin = new Date(req.params.data_final).toUTCString();

            let agendamentos = await AgendamentoBO.obterAgendamentosPorPeriodo(dt_ini, dt_fin);
            res.send(agendamentos);

        } else {

            // Obter todas as agendamentos
            let agendamentos = await AgendamentoBO.obterAgendamentos();
            res.send(agendamentos);

        }

    }

    async incluirAgendamento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        if (req.body.atendimento) {
            usuario.id = req.body.usuario.id;
            usuario = await UsuarioBO.obterUsuario(usuario);
        }

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        if (req.body.atendimento) {
            atendimento.id = req.body.atendimento.id;
            atendimento = await AtendimentoBO.obterAtendimento(atendimento);
        }

        let agendamento = new Agendamento(null, req.body.data_hora_agendamento, atendimento, usuario);
        agendamento = await AgendamentoBO.incluirAgendamento(agendamento);

        let result;

        if(agendamento.error) {
            result = { error: agendamento.message }
        } else {
            result = { id: agendamento.body, status: req.body.status, message: agendamento.message }
        }

        res.status(agendamento.status_code).json(result);
    }

    async alterarAgendamento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.usuario.id;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.atendimento.id;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        let agendamento = new Agendamento(req.params.id, req.body.data_hora_agendamento, atendimento, usuario);
        agendamento = await AgendamentoBO.alterarAgendamento(agendamento);

        let result;

        if(agendamento.error) {
            result = { error: agendamento.message }
        } else {
            result = { status: req.body.status, message: agendamento.message }
        }

        res.status(agendamento.status_code).json(result);

    }

    async excluirAgendamento(req, res) {

        let agendamento = new Agendamento();
        let result;

        if (req.params.id) {
            agendamento.id = req.params.id;
        }
        
        agendamento = await AgendamentoBO.excluirAgendamento(agendamento);

        if(agendamento.error) {
            result = { error: agendamento.message }
        } else {
            result = { status: req.body.status, message: agendamento.message }
        }

        res.status(agendamento.status_code).json(result);
    }

    async verificarDisponibilidade(req, res) {

        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        let disponivel = await AgendamentoBO.verificarDisponibilidade(usuario, req.params.data_inicio, req.params.data_final);

        res.status(200).json({
            status: req.body.status,
            message: Boolean(disponivel)
        });
    }
}

module.exports = AgendamentoController;