module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        endereco: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        status: DataTypes.BOOLEAN,
        cpf: {type: DataTypes.STRING, unique: true},
        perfil: DataTypes.INTEGER
    });

    Usuario.associate = models => {
        Usuario.belongsToMany(models.Habilidade, {through: models.UsuarioHabilidade, foreignKey: 'id_usuario'})
        Usuario.hasMany(models.Atendimento, {as: 'id_solicitante'})
        Usuario.hasMany(models.Agendamento, {as: 'id_executante'})
        Usuario.hasMany(models.UsuarioHabilidade, {foreignKey: 'id_usuario'});
    }

    return Usuario;
}