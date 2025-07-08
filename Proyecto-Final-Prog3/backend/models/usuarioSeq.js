'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //relacion uni a muchos: usuario tiene muchos seguimientos
     Usuario.hasMany(models.Seguimiento, { foreignKey: 'usuario_id' });
     //relacion muchos a muchos usuario y prod a traves de compra
     Usuario.belongsToMany(models.Producto, {through: 'models.Compra', foreignKey: 'usuario_id', otherKey: 'producto_id'});
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};