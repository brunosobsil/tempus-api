module.exports = (sequelize, DataTypes) => {

    const PessoaJuridicaSqm = sequelize.define('PessoaJuridica', {        
        nome: { type: DataTypes.STRING },
        endereco: { type: DataTypes.STRING },
        telefone: {type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        status: { type: DataTypes.BOOLEAN },
        razaoSocial: { type: DataTypes.STRING },
        cnpj: { type: DataTypes.STRING },
        nomeResponsavel: { type: DataTypes.STRING }
    });

    return PessoaJuridicaSqm;
}