const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ejercicioValido = require('../middleware/ejercicioValido');
const EjercicioController = require('../controllers/EjercicioController');

router.get('/', catchAsync(EjercicioController.getAll));
router.get('/:id', catchAsync(EjercicioController.getOne));
router.post('/', ejercicioValido, catchAsync(EjercicioController.create));
router.put('/:id', ejercicioValido, catchAsync(EjercicioController.update));
router.delete('/:id', catchAsync(EjercicioController.delete));

module.exports = router;