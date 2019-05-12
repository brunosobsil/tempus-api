const ProjetoDAO = require("../../src/model/dao/ProjetoDAO");
const Projeto = require("../../src/model/entities/Projeto");

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

    let a = new Atendimento();
    a.id = 1;
    a = await AtendimentoDAO.obterAtendimento(a);

    let nome = "Projeto final da faculdade 2019";
    let descricao_atividades = "O melhor projeto do seculo 21";
    let horas_estimadas = 80.95;
    let horas_realizadas = 12;

    let t = new Projeto(null, nome, descricao_atividades, horas_estimadas, horas_realizadas, a);

    let id = await ProjetoDAO.incluirProjeto(t);

    if(id > 0)
        console.log('Projeto incluido com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir projeto');

}

async function obter(){

    let t = new Projeto();
    t.id = 1;
    let t2 = await ProjetoDAO.obterProjeto(t);

    if(t2 != null)
        console.log('Projeto recuperado: ' + JSON.stringify(t2));
    else
        console.error('Nenhuma projeto recuperado');

}

async function obterTodos(){

    let t = await ProjetoDAO.obterProjetos();

    if(t != null)
        console.log('Projetos recuperados: ' + JSON.stringify(t));
    else
        console.error('Nenhum projeto recuperado');

}

async function alterar(){

    let a = new Atendimento();
    a.id = 1;
    a = await AtendimentoDAO.obterAtendimento(a);
    
    let nome = "Projeto final da faculdade 2199";
    let descricao_atividades = "O melhor projeto do seculo 22";
    let horas_estimadas = 2000.95;
    let horas_realizadas = 120.12;

    let t = new Projeto(1, nome, descricao_atividades, horas_estimadas, horas_realizadas, a);

    await ProjetoDAO.alterarProjeto(t);
    let t2 = await ProjetoDAO.obterProjeto(t);

    if(t2 != null)
        console.log('Projeto alterado com sucesso: ' + JSON.stringify(t2));
    else
        console.error('Erro ao alterar projeto');

}

async function excluir(){

    let t = new Projeto();
    t.id = 1;

    await ProjetoDAO.excluirProjeto(t);
    let t2 = await ProjetoDAO.obterProjeto(t);

    if(t2 == null)
        console.log('Projeto excluido com sucesso. ID: ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir projeto');

}