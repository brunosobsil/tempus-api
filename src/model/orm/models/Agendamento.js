module.exports = (sequelize, DataTypes) => {

    const Agendamento = sequelize.define('Agendamento',{
        data_agendamento: DataTypes.STRING,
        //data_inclusao: DataTypes.DATE,
        data_exclusao: DataTypes.DATE
    });

    return Agendamento;
}