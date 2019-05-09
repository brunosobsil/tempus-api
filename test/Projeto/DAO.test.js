const ProjetoDAO = require("../../src/model/dao/ProjetoDAO");
const Projeto = require("../../src/model/entities/Projeto");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
//    await excluir();
}

async function incluir(){

    let t = new Projeto();
    t.nome = "Projeto final da faculdade";
    t.descricao = "O melhor projeto do seculo";
    t.horas_estimadas = 80.95;
    t.horas_realizadas = 12;

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

    let t = new Projeto();
    t.id = 1;
    t.nome = "Projeto final da faculdade alterada";
    t.descricao = "O melhor projeto do seculo alterada";
    t.horas_estimadas = 180.11;
    t.horas_realizadas = 120.55;

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