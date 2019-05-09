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
        Usuario.hasMany(models.Atendimento, {foreignKey: 'id_usuario'})
        Usuario.hasMany(models.Agendamento, {foreignKey: 'id_usuario'})
        Usuario.hasMany(models.UsuarioHabilidade, {foreignKey: 'id_usuario'});
        Usuario.belongsTo(models.Cliente, { foreignKey: 'id_cliente'});
    }

    return Usuario;
}