const HabilidadeDAO = require("../../src/model/dao/HabilidadeDAO");
const Habilidade = require("../../src/model/entities/Habilidade");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
//    await excluir();
}

async function incluir(){

    let t = new Habilidade();
    t.nome = "Linguagem Javascript";
    t.descricao = "Desenvolvimento na linguagem javascript";

    let id = await HabilidadeDAO.incluirHabilidade(t);
    if(id > 0)
        console.log('Habilidade incluida com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir habilidade');

}

async function obter(){

    let t = new Habilidade();
    t.id = 1;
    let t2 = await HabilidadeDAO.obterHabilidade(t);

    if(t2 != null)
        console.log('Habilidade recuperada: ' + JSON.stringify(t2));
    else
        console.error('Nenhuma habilidade recuperada');

}

async function obterTodos(){

    let t = await HabilidadeDAO.obterHabilidades();

    if(t != null)
        console.log('Habilidades recuperadas: ' + JSON.stringify(t));
    else
        console.error('Nenhuma habilidade recuperado');

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