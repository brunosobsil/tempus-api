module.exports = (sequelize, DataTypes) => {

    const Agendamento = sequelize.define('Agendamento',{
        data_agendamento: DataTypes.DATE,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    Agendamento.associate = models => {
        Agendamento.belongsTo(models.Atendimento)
    }

    Agendamento.associate = models => {
        Agendamento.belongsTo(models.Usuario)
    }

    Agendamento.associate = models => {
        Agendamento.hasMany(models.OrdemServico)
    }

    return Agendamento;
}