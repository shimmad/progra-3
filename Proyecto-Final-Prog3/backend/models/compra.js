'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compra.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
      Compra.belongsTo(models.Producto, { foreignKey: 'producto_id' });
    }
  }
  Compra.init({
    usuario_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    cantidad: DataTypes.INTEGER,
    precio_total: DataTypes.DECIMAL(10, 2)


  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};