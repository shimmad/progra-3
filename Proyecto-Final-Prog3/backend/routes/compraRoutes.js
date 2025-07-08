const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/CompraController');
const catchAsync = require('../utils/catchAsync');
const compraValido = require('../middleware/compraValido');

router.get('/', catchAsync(CompraController.getAll));
router.get('/:id', catchAsync(CompraController.getOne));
router.get('/usuario/:id', catchAsync(CompraController.getAllByUsuario));
router.post('/', compraValido, catchAsync(CompraController.create));
router.put('/:id', compraValido, catchAsync(CompraController.update));
router.delete('/:id', catchAsync(CompraController.delete));

module.exports = router;