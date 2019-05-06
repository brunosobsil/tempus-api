const AtendimentoDAO = require("../../src/model/dao/AtendimentoDAO");
const Atendimento = require("../../src/model/entities/Atendimento");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
//    await excluir();
}

async function incluir(){

    let t = new Atendimento();
    t.assunto = "Implantação Cocacola";
    t.descricao = "Executar a implantação na cocacola";
    t.data_sugerida = '31/12/2020';

    let id = await AtendimentoDAO.incluirAtendimento(t);

    if(id > 0)
        console.log('Atendimento incluido com sucesso. ID: ' + id);
    else
        console.error('Erro ao incluir data_sugerida');

}

async function obter(){

    let t = new Atendimento();
    t.id = 1;

    let t2 = await AtendimentoDAO.obterAtendimento(t);

    if(t2 != null)
        console.log('Atendimento recuperado: ' + JSON.stringify(t2));
    else
        console.error('Nenhum atendimento recuperado');

}

async function obterTodos(){

    let t2 = await AtendimentoDAO.obterAtendimentos();

    if(t2 != null)
        console.log('Atendimentos recuperados: ' + JSON.stringify(t2));
    else
        console.error('Nenhum atendimento recuperado');

}

async function alterar(){

    let t = new Atendimento();
    t.id = 1;
    t.assunto = "Implantação Pepsi";
    t.descricao = "Executar a implantação na Pepsi";
    t.data_sugerida = '31/12/2019';

    await AtendimentoDAO.alterarAtendimento(t);
    let t2 = await AtendimentoDAO.obterAtendimento(t);

    if(t2 != null)
        console.log('Atendimento alterado com sucesso: ' + JSON.stringify(t2));
    else
        console.error('Erro ao alterar atendimento');

}

async function excluir(){

    let t = new Atendimento();
    t.id = 1;

    await AtendimentoDAO.excluirAtendimento(t);
    let t2 = await AtendimentoDAO.obterAtendimento(t);
    
    if(t2 == null)
        console.log('Atendimento excluido com sucesso. ID: ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir atendimento');

}