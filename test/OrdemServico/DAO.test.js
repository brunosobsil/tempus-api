const OrdemServicoDAO = require("../../src/model/dao/OrdemServicoDAO");
const OrdemServico = require("../../src/model/entities/OrdemServico");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
//    await excluir();
}

async function incluir(){

    let t = new OrdemServico();
    t.descricao = "Desenvolvimento na linguagem javascript";
    t.dataHoraInicio = "2019-12-31 23:30:59";
    t.dataHoraFinal = "2019-12-31 23:59:58";
    t.status = "Aberta";

    let id = await OrdemServicoDAO.incluirOrdemServico(t);

    if(id > 0)
        console.log('Ordem de servico incluida com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir ordem de servico');

}

async function obter(){

    let t = new OrdemServico();
    t.id = 1;
    let t2 = await OrdemServicoDAO.obterOrdemServico(t);

    if(t2 != null)
        console.log('Ordem de servico recuperada: ' + JSON.stringify(t2));
    else
        console.error('Nenhuma ordem de servico recuperada');

}

async function obterTodos(){

    let t = await OrdemServicoDAO.obterOrdensServico();

    if(t != null)
        console.log('Ordens de servico recuperadas: ' + JSON.stringify(t));
    else
        console.error('Nenhuma ordem de servico recuperada');

}

async function alterar(){

    let t = new Habilidade();
    t.id = 1;
    t.nome = "Linguagem JS Alterada";
    t.descricao = "Desenvolvimento na linguagem JS Alterada";

    await HabilidadeDAO.alterarHabilidade(t);
    let t2 = await HabilidadeDAO.obterHabilidade(t);

    if(t2 != null)
        console.log('Habilidade alterada com sucesso: ' + JSON.stringify(t2));
    else
        console.error('Erro ao alterar habilidade');

}

async function excluir(){

    let t = new Habilidade();
    t.id = 1;

    await HabilidadeDAO.excluirHabilidade(t);
    let t2 = await HabilidadeDAO.obterHabilidade(t);

    if(t2 == null)
        console.log('Habilidade excluida com sucesso. ID: ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir habilidade');

}