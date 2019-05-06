const HabilidadeDAO = require("../../src/model/dao/HabilidadeDAO");
const Habilidade = require("../../src/model/entities/Habilidade");

incluir();

async function incluir(){

    let h = new Habilidade();
    h.nome = "Linguagem Javascript";
    h.descricao = "Desenvolvimento na linguagem javascript";

    let id = await HabilidadeDAO.incluirHabilidade(h);
    if(id > 0)
        console.log('Habilidade incluida com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir habilidade');

}