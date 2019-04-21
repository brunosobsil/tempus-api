module.exports = (sequelize, DataTypes) => {

    const Habilidade = sequelize.define('Habilidade',{
        nome: DataTypes.STRING,
        descricao: {type: DataTypes.STRING, unique: true}
    });

    Habilidade.associate = models => {
        Habilidade.belongsToMany(models.Analista, {through: models.AnalistaHabilidade, foreignKey: 'id_habilidade'})
    }

    return Habilidade;
}