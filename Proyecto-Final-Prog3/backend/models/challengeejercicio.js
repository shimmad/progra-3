'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChallengeEjercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChallengeEjercicio.belongsTo(models.Challenge, { foreignKey: 'challenge_id' });
      ChallengeEjercicio.belongsTo(models.Ejercicio, { foreignKey: 'ejercicio_id' });
    }
  }
  ChallengeEjercicio.init({
    challenge_id: DataTypes.INTEGER,
    ejercicio_id: DataTypes.INTEGER,
    dia: DataTypes.INTEGER,
    posicion: DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'ChallengeEjercicio',
  });
  return ChallengeEjercicio;
};