const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const catchAsync = require('../utils/catchAsync');
const usuarioValido = require('../middleware/usuarioValido');

router.get('/', catchAsync(UsuarioController.getAll));
router.get('/:id', catchAsync(UsuarioController.getOne));
router.post('/', usuarioValido, catchAsync(UsuarioController.create));
router.put('/:id', usuarioValido, catchAsync(UsuarioController.update));
router.delete('/:id', catchAsync(UsuarioController.delete));

module.exports = router;