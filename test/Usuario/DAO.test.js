const UsuarioDAO = require("../../src/model/dao/UsuarioDAO");
const Usuario = require("../../src/model/entities/Usuario");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    await obterTodos();
    await ativar();
}

async function incluir(){

    let t = new Usuario();
    t.nome = "Maria Fernanda";
    t.endereco = "Av. das Americas 10005";
    t.email = "maria@eu.com";
    t.status = true;
    t.cpf = "500.926.021-26";
    t.perfil = 1;

    let id = await UsuarioDAO.incluirUsuario(t);
    if(id > 0)
        console.log('Usuario incluido com sucesso. ID: ' + id);
    else
        console.error('Erro ao incluir usuario');

}

async function obter(){

    let t = new Usuario();
    t.id = 1;
    let t2 = await UsuarioDAO.obterUsuario(t);

    if(t2 != null)
        console.log('Usuario recuperado: ' + JSON.stringify(t2));
    else
        console.error('Nenhum usuario recuperado');

}

async function obterTodos(){

    let t2 = await UsuarioDAO.obterUsuarios();

    if(t2 != null)
        console.log('Usuarios recuperados: ' + JSON.stringify(t2));
    else
        console.error('Nenhum usuario recuperado');

}

async function alterar(){

    let t = new Usuario();
    t.id = 1;
    t.nome = "Maria Fernanda Alt";
    t.endereco = "Av. das Americas  Alt 10005";
    t.email = "maria-alt@eu.com";
    t.status = false;
    t.cpf = "500.926.021-29";
    t.perfil = 2;

    await UsuarioDAO.alterarUsuario(t);
    let t2 = await UsuarioDAO.obterUsuario(t);

    if(t2 != null)
        console.log('Usuario alterado com sucesso: ' + JSON.stringify(t2));
    else
        console.error('Erro ao alterar usuario');

}

async function ativar(){

    let t = new Usuario();
    t.id = 1;

    await UsuarioDAO.ativarDesativarUsuario(t);
    let t2 = await UsuarioDAO.obterUsuario(t);

    if(t2 != null)
        console.log('Status do usuario alterado com sucesso. ID: ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir usuario');

}