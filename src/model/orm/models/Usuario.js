module.exports = (sequelize, DataTypes) => {
    
    const Usuario = sequelize.define('Usuario',{
        id: { type: DataTypes.INTEGER, primaryKey: true },
        nome: DataTypes.STRING,
        endereco: DataTypes.STRING,
        email: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        cpf: DataTypes.STRING,
        perfil: DataTypes.INTEGER
    });

    return Usuario;
}
