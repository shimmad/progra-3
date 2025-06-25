'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Challenge.hasMany(models.Seguimiento, { foreignKey: 'challenge_id' });
      Challenge.belongsToMany(models.Ejercicio, {through: 'models.Challengeejercicio', foreignKey: 'challenge_id'});
    }
  }
  Challenge.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};