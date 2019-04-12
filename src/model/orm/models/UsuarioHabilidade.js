module.exports = (sequelize, DataTypes) => {

    const UsuarioHabilidade = sequelize.define('UsuarioHabilidade', {
        nivel: DataTypes.INTEGER,
    });

    UsuarioHabilidade.associate = models => {
        UsuarioHabilidade.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey : 'id_usuario',
            sourceKey: 'id'
        });

        UsuarioHabilidade.belongsTo(models.Habilidade, {
            as: 'habilidades',
            foreignKey : 'id_habilidade',
            sourceKey: 'id'
        })
    };

    return UsuarioHabilidade;
}