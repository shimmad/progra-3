const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');
const catchAsync = require('../utils/catchAsync');
const productoValido = require('../middleware/productoValido');

router.get('/', catchAsync(ProductoController.listarProductos));
router.get('/:id', catchAsync(ProductoController.GetOne));
router.post('/', productoValido, catchAsync(ProductoController.create));
router.put('/:id', productoValido, catchAsync(ProductoController.update));
router.delete('/:id', catchAsync(ProductoController.delete));

module.exports = router;