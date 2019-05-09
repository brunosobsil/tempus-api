module.exports = (sequelize, DataTypes) => {

    const Atendimento = sequelize.define('Atendimento',{
        assunto: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_sugerida: DataTypes.DATE
    });

    Atendimento.associate = models => {
        Atendimento.hasOne(models.Projeto, {foreignKey: 'id_atendimento'})
        Atendimento.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey : 'id_usuario',
            sourceKey: 'id'
        });
        Atendimento.belongsTo(models.Habilidade, {foreignKey: 'id_habilidade'})
        Atendimento.hasMany(models.Agendamento, {foreignKey: 'id_atendimento'})
    }
    return Atendimento;
}