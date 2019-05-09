const UsuarioDAO = require("../../src/model/dao/UsuarioDAO");
const HabilidadeDAO = require("../../src/model/dao/HabilidadeDAO");
const UsuarioHabilidadeDAO = require("../../src/model/dao/UsuarioHabilidadeDAO");
const Usuario = require("../../src/model/entities/Usuario");
const Habilidade = require("../../src/model/entities/Habilidade");
const UsuarioHabilidade = require("../../src/model/entities/UsuarioHabilidade");

index();

async function index(){
    await incluir();
    await obter();
    await alterar();
    //await excluir();
    //await excluirTodos();
}

async function incluir(){

    let u = new Usuario();
    u.id = 1;
    let usu = await UsuarioDAO.obterUsuario(u);

    let h = new Habilidade();
    h.id = 1;
    let ha = await HabilidadeDAO.obterHabilidade(h);

    let uh = new UsuarioHabilidade(3, usu, ha);
    let usuHab = await UsuarioHabilidadeDAO.incluirUsuarioHabilidade(uh);

    if(usuHab != null)
        console.log('Associado com sucesso: ' + JSON.stringify(usuHab));
    else
        console.error('Erro ao associar usuarioHabilidade');

}

async function obter(){
    let u = new Usuario();
    u.id = 1;
    let usu = await UsuarioDAO.obterUsuario(u);

    let t = new UsuarioHabilidade();
    t.usuario = usu;

    let t2 = await UsuarioHabilidadeDAO.obterUsuarioHabilidade(t);

    if(t2 != null)
        console.log('UsuarioHabilidade recuperada: ' + JSON.stringify(t2));
    else
        console.error('Nenhum usuarioHabilidade recuperado');

}

async function alterar(){
    let u = new Usuario();
    u.id = 1;
    let usu = await UsuarioDAO.obterUsuario(u);

    let h = new Habilidade();
    h.id = 1;
    let ha = await HabilidadeDAO.obterHabilidade(h);

    let t = new UsuarioHabilidade(5, usu, ha);
    await UsuarioHabilidadeDAO.alterarUsuarioHabilidade(t);
    let t2 = await UsuarioHabilidadeDAO.obterUsuarioHabilidade(t);

    if(t2 != null)
        console.log('UsuarioHabilidade alterada com sucesso: ' + JSON.stringify(t2));
    else
        console.error('Erro ao alterar usuarioHabilidade');

}

async function excluir(){

    let t = new UsuarioHabilidade();
    t.usuario.id = 1;
    t.habilidade.id = 1;

    await UsuarioHabilidadeDAO.excluirUsuarioHabilidade(t);
    let t2 = await UsuarioHabilidadeDAO.obterUsuarioHabilidade(t);
    
    if(t2 != null)
        console.log('UsuarioHabilidade excluida com sucesso. ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir usuarioHabilidade');

}

async function excluirTodos(){

    let t = new UsuarioHabilidade();
    t.usuario.id = 1;

    await UsuarioHabilidadeDAO.excluirUsuarioHabilidades(t);
    let t2 = await UsuarioHabilidadeDAO.obterUsuarioHabilidade(t);
    
    if(t2 == null)
        console.log('UsuarioHabilidade excluido com sucesso. ' + JSON.stringify(t2));
    else
        console.error('Erro ao excluir usuarioHabilidade');

}