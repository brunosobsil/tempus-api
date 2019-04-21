module.exports = (sequelize, DataTypes) => {

    const Atendimento = sequelize.define('Atendimento',{
        assunto: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_sugerida: DataTypes.DATE,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    return Atendimento;
}