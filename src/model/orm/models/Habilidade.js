module.exports = (sequelize, DataTypes) => {

    const Habilidade = sequelize.define('Habilidade',{
        nome: {type: DataTypes.STRING, unique: true},
        descricao: DataTypes.STRING
    });

    Habilidade.associate = models => {
        Habilidade.belongsToMany(models.Usuario, {through: models.UsuarioHabilidade, foreignKey: 'id_habilidade'})
        Habilidade.hasMany(models.UsuarioHabilidade, {foreignKey: 'id_habilidade'})
    }

    return Habilidade;
}