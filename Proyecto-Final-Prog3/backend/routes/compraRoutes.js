const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/CompraController');
const catchAsync = require('../utils/catchAsync');
const compraValido = require('../middleware/compraValido');

router.get('/', catchAsync(CompraController.getAll));
router.get('/compra/:id', catchAsync(CompraController.getOne));
router.get('/:id', catchAsync(CompraController.getAllByUsuario));
router.post('/', compraValido, catchAsync(CompraController.create));
router.delete('/:id', catchAsync(CompraController.delete));

module.exports = router;