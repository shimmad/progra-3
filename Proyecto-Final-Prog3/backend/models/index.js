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
// importo modelos que se comunican con la db modelSeq
const db= {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//importo cada modelo y lo agrego al objeto db
db.Usuario = require('./usuarioSeq')(sequelize, DataTypes);
db.Producto = require('./productoSeq')(sequelize, DataTypes);
db.Compra = require('./compraSeq')(sequelize, DataTypes);
db.Challenge = require('./challengeSeq')(sequelize, DataTypes);
db.Ejercicio = require('./ejercicioSeq')(sequelize, DataTypes);
db.Seguimiento = require('./seguimientoSeq')(sequelize, DataTypes);
db.ChallengeEjercicio = require('./challengeejercicioSeq')(sequelize, DataTypes);

//llamo a associate de cada modelo si existe
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;