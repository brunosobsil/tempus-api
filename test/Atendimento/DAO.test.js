const AtendimentoDAO = require("../../src/model/dao/AtendimentoDAO");
const Atendimento = require("../../src/model/entities/Atendimento");

const HabilidadeDAO = require("../../src/model/dao/HabilidadeDAO");
const Habilidade = require("../../src/model/entities/Habilidade");

const UsuarioDAO = require("../../src/model/dao/UsuarioDAO");
const Usuario = require("../../src/model/entities/Usuario");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
//    await excluir();
}

async function incluir(){

    let u = new Usuario();
    u.id = 1;
    u = await UsuarioDAO.obterUsuario(u);

    let h = new Habilidade();
    h.id = 1;
    h = await HabilidadeDAO.obterHabilidade(h);

    let assunto = "Implantação Cocacola";
    let descricao = "Executar a implantação na cocacola";
    let data_sugerida = "2019-05-11 19:39:10.255-03";

    let t = new Atendimento(null, assunto, descricao, data_sugerida, null, h, u);

    let id = await AtendimentoDAO.incluirAtendimento(t);

    if(id > 0)
        console.log('Atendimento incluido com sucesso. ID: ' + id);
    else
        console.error('Erro ao incluir atendimento');

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

    let u = new Usuario();
    u.id = 1;
    u = await UsuarioDAO.obterUsuario(u);

    let h = new Habilidade();
    h.id = 1;
    h = await HabilidadeDAO.obterHabilidade(h);

    let assunto = "Implantação Pepsi";
    let descricao = "Executar a implantação na Pepsi";
    let data_sugerida = "2019-05-12 01:36:55";
    
    let t = new Atendimento(1, assunto, descricao, data_sugerida, null, h, u);

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