const UsuarioDAO = require("../../src/model/dao/UsuarioDAO");
const Usuario = require("../../src/model/entities/Usuario");

incluir();

async function incluir(){

    let u = new Usuario();
    u.nome = "Maria Fernanda";
    u.endereco = "Av. das Americas 10005";
    u.email = "maria@eu.com";
    u.status = true;
    u.cpf = "500.926.021-26";
    u.perfil = 1;

    let id = await UsuarioDAO.incluirUsuario(u);
    if(id > 0)
        console.log('Usuario incluido com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir usuario');

}