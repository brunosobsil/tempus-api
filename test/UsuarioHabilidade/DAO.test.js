const UsuarioHabilidadeDAO = require("../../src/model/dao/UsuarioHabilidadeDAO");
const Usuario = require("../../src/model/entities/Usuario");
const Habilidade = require("../../src/model/entities/Habilidade");
const UsuarioHabilidade = require("../../src/model/entities/UsuarioHabilidade");

incluir();

async function incluir(){

    let u = new Usuario();
    u.id = 1; // tem que ser um id valido
    u.nome = "Maria Fernanda";
    u.endereco = "Av. das Americas 10005";
    u.email = "maria@eu.com";
    u.status = true;
    u.cpf = "500.926.021-26";
    u.perfil = 1;

    let h = new Habilidade();
    h.id = 1; // tem que ser um id valido
    h.nome = "Linguagem Javascript";
    h.descricao = "Desenvolvimento na Linguagem Javascript";

    let uh = new UsuarioHabilidade();
    uh.usuario = u;
    uh.habilidade = h;
    uh.nivel = 3;

    let usuHab = await UsuarioHabilidadeDAO.incluirUsuarioHabilidade(uh);
    if(usuHab)
        console.log('Associado com sucesso: ' + usuHab);
    else
        console.log('Erro ao associar');

}