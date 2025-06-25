// backend/models/index.js
// inicializa swquelize y centraliza la conexion
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions
  }
);
// importo modelos
const db= {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//importo cada modelo y lo agrego al objeto db
db.Usuario = require('./usuario')(sequelize, DataTypes);
db.Producto = require('./producto')(sequelize, DataTypes);
db.Compra = require('./compra')(sequelize, DataTypes);
db.Challenge = require('./challenge')(sequelize, DataTypes);
db.Ejercicio = require('./ejercicio')(sequelize, DataTypes);
db.Seguimiento = require('./seguimiento')(sequelize, DataTypes);
db.ChallengeEjercicio = require('./challengeejercicio')(sequelize, DataTypes);

//llamo a associate de cada modelo si existe
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;