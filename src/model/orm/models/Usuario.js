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
        Usuario.hasOne(models.Analista)
    }

    return Usuario;
}