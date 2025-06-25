const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta de ejemplo
router.get('/test', (req, res) => {
  res.json({
    message: 'Endpoint de prueba',
    data: {
      backend: 'Express',
      database: 'PostgreSQL',
      orm: 'Sequelize'
    }
  });
});

//monto sub-rutas especficas de cada conrolador

router.use('/usuarios', require('./usuarioRoutes'));
router.use('/productos', require('./productoRoutes'));
router.use('/ejercicios', require('./ejercicioRoutes'));
router.use('/compras', require('./compraRoutes'));
router.use('/challenges', require('./challengeRoutes'));
router.use('/challengeEj', require('./challengeEjRoutes'));
router.use('/seguimientos', require('./seguimientoRoutes'));

module.exports = router;
