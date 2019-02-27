module.exports = (sequelize, DataTypes) => {

    const AnalistaSqm = sequelize.define('Analista', {        
        superior: { type: DataTypes.INTEGER },
        habilidade: { type: DataTypes.INTEGER },
        nivel: { type: DataTypes.INTEGER }
    });

    return AnalistaSqm;
}