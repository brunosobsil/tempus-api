const ClienteDAO = require("../../src/model/dao/ClienteDAO");
const Cliente = require("../../src/model/entities/Cliente");

incluir();

async function incluir(){

    let u = new Cliente();
    u.nome = "Coca Cola";
    u.endereco = "Av. dos testes 999125";
    u.email = "joao@cocacola.com";
    u.status = true;
    u.razaoSocial = "Coca Cola Comercio de bebidas";
    u.cnpj = "32.265.591-0001/58";
    u.nomeResponsavel = "Joaozinho da Coca dos Santos";

    let id = await ClienteDAO.incluirCliente(u);
    if(id > 0)
        console.log('Cliente incluido com sucesso. ID: ' + id);
    else
        console.log('Erro ao incluir cliente');

}