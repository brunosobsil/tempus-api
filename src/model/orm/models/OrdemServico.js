module.exports = (sequelize, DataTypes) => {

    const OrdemServico = sequelize.define('OrdemServico',{
        status: DataTypes.ENUM('Aberta', 'Em execução', 'Em aprovação', 'Aprovada', 'Rejeitada', 'Concluída', 'Cancelada'),
        descricao: DataTypes.STRING,
        data_hora_inicio: DataTypes.DATE,
        data_hora_final: DataTypes.DATE,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    OrdemServico.associate = models => {
        OrdemServico.belongsTo(models.Agendamento,  {
            as: 'agendamento',
            foreignKey : 'id_agendamento',
            sourceKey: 'id'
        })
    }
    
    return OrdemServico;
}