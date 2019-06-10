const NotificacaoBO = require('../model/bo/NotificacaoBO');

const OrdemServico = require('../model/entities/OrdemServico');
const OrdemServicoBO = require('../model/bo/OrdemServicoBO');

const Agendamento = require('../model/entities/Agendamento');
const AgendamentoBO = require('../model/bo/AgendamentoBO');

const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

class NotificacaoController {

    async enviarEmailOS(req, res) {

        // Obter ordem de servico por ID
        let ordemServico = new OrdemServico();
        ordemServico.id = req.params.id;
        ordemServico = await OrdemServicoBO.obterOrdemServico(ordemServico);

        // Obter agendamento por ID
        let agendamento = new Agendamento();
        agendamento.id = ordemServico.agendamento.id;
        agendamento = await AgendamentoBO.obterAgendamento(agendamento);

        // Obter Usuario por ID
        let usuario = new Usuario();
        usuario.id = agendamento.atendimento.usuario.id;
        usuario = await UsuarioBO.obterUsuario(usuario);

        let email = await NotificacaoBO.enviarEmailOS(ordemServico, usuario);

        res.send(email);

    }

}

module.exports = NotificacaoController;