module.exports = (sequelize, DataTypes) => {

    const Agendamento = sequelize.define('Agendamento',{
        data_hora_agendamento: DataTypes.DATE,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    Agendamento.associate = models => {
        Agendamento.belongsTo(models.Atendimento, {
            as: 'atendimento',
            foreignKey : 'id_atendimento',
            sourceKey: 'id'
        })
        Agendamento.hasMany(models.OrdemServico, {foreignKey: 'id_agendamento'})
    }

    return Agendamento;
}