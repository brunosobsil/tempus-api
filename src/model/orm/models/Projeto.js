module.exports = (sequelize, DataTypes) => {

    const Projeto = sequelize.define('Projeto',{
        nome: DataTypes.STRING,
        horas_estimadas: DataTypes.FLOAT
    });

    return Projeto;
}