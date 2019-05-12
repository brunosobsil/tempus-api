module.exports = (sequelize, DataTypes) => {

    const Projeto = sequelize.define('Projeto',{
        nome: DataTypes.STRING,
        descricao_atividades: DataTypes.STRING,
        horas_estimadas: DataTypes.FLOAT,
        horas_realizadas: DataTypes.FLOAT
    });

    Projeto.associate = models => {
        Projeto.belongsTo(models.Atendimento,  {
            as: 'atendimento',
            foreignKey : 'id_atendimento',
            sourceKey: 'id'
        })
    }

    return Projeto;
}