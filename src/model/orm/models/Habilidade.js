module.exports = (sequelize, DataTypes) => {
    
    const Habilidade = sequelize.define('Habilidade',{
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    });

    return Habilidade;
}