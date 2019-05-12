module.exports = (sequelize, DataTypes) => {

    const Cliente = sequelize.define('Cliente', {
        nome: DataTypes.STRING,
        endereco: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        status: DataTypes.BOOLEAN,
        razao_social: {type: DataTypes.STRING, unique: true},
        cnpj: {type: DataTypes.STRING, unique: true},
        nome_responsavel: DataTypes.STRING,
    });

    Cliente.associate = models => {
        Cliente.hasMany(models.Usuario, {as: 'usuarios', foreignKey: 'id_cliente'})
    }

    return Cliente;
}