module.exports = (sequelize, DataTypes) => {

    const Atendimento = sequelize.define('Atendimento',{
        assunto: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_sugerida: DataTypes.DATE,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    Atendimento.associate = models => {
        Atendimento.hasOne(models.Projeto)
    }

    Atendimento.associate = models => {
        Atendimento.belongsTo(models.Usuario)
    }

    Atendimento.associate = models => {
        Atendimento.hasOne(models.Habilidade)
    }

    Atendimento.associate = models => {
        Atendimento.hasMany(models.Agendamento)
    }

    return Atendimento;
}