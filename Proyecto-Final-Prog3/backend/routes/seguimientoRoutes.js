const express = require('express');
const router = express.Router();
const SeguimientoController = require('../controllers/SeguimientoController');
const catchAsync = require('../utils/catchAsync');
const seguimientoValido = require('../middleware/seguimientoValido');


router.get('/', catchAsync(SeguimientoController.getAll));
router.get('/:id', catchAsync(SeguimientoController.getAllByChallenge));
router.post('/', seguimientoValido, catchAsync(SeguimientoController.create));
router.put('/:id', seguimientoValido, catchAsync(SeguimientoController.update));
router.delete('/:id', catchAsync(SeguimientoController.delete));

module.exports = router;