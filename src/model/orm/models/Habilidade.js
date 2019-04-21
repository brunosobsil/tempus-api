module.exports = (sequelize, DataTypes) => {

    const Habilidade = sequelize.define('Habilidade',{
        nome: DataTypes.STRING,
        descricao: {type: DataTypes.STRING, unique: true}
    });

    Habilidade.associate = models => {
        Habilidade.belongsToMany(models.Usuario, {through: models.UsuarioHabilidade, foreignKey: 'id_habilidade'})
    }

    Habilidade.associate = models => {
        Habilidade.belongsTo(models.Atendimento)
    }

    return Habilidade;
}