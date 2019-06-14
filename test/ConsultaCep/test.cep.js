const consultaCepBO = require('../../src/model/bo/ConsultaCepBO');

index();

async function index(){

    let cep = await consultaCepBO.consultaCep(20541120);
    console.log(cep);

}