module.exports = (sequelize, DataTypes) => {

    const Cliente = sequelize.define('Cliente', {
        nome: DataTypes.STRING,
        endereco: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        status: DataTypes.BOOLEAN,
        razaoSocial: {type: DataTypes.STRING, unique: true},
        cnpj: {type: DataTypes.STRING, unique: true},
        nomeResponsavel: DataTypes.STRING,
    });

    Cliente.associate = models => {
        Cliente.hasMany(models.Usuario, {as: 'usuarios'})
    }

    return Cliente;
}