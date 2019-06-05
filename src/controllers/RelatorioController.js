const OrdemServicoBO = require('../model/bo/OrdemServicoBO');
const ProjetoBO = require('../model/bo/ProjetoBO');
const UsuarioBO = require('../model/bo/UsuarioBO');

class RelatorioController {

    async obterOrdemServicoPorStatus(req, res) {

        let dt_ini = new Date(req.params.data_inicio).toUTCString();
        let dt_fin = new Date(req.params.data_final).toUTCString();
        let status = req.params.status;
        let os = await OrdemServicoBO.obterOrdemServicoPorStatus(dt_ini, dt_fin, status);

        res.status(200).json({
            status: req.body.status,
            body: os
        });

    }

    async obterHorasPorUsuarios(req, res){

        let dt_ini = new Date(req.params.data_inicio).toUTCString();
        let dt_fin = new Date(req.params.data_final).toUTCString();
        let total = await UsuarioBO.obterHorasPorUsuarios(dt_ini, dt_fin);

        res.status(200).json({
            status: req.body.status,
            body: total
        });

    }

    async obterHorasPorProjetos(req, res){

        let dt_ini = new Date(req.params.data_inicio).toUTCString();
        let dt_fin = new Date(req.params.data_final).toUTCString();
        let total = await ProjetoBO.obterHorasPorProjetos(dt_ini, dt_fin);

        res.status(200).json({
            status: req.body.status,
            body: total
        });

    }

}

module.exports = RelatorioController;