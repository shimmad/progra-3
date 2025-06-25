const express= require('express');
const router= express.Router();
const controller=require('../controllers/turnosController');
const validar_nombre=require('../middelware/validarNombre')

router.get('/', controller.obt_todos); //que significa '/'? representa la raiz relativa del recurso q esta usando este router
router.post('/',controller.crear);
router.delete('/:id',controller.eliminar);
router.get('/:nombre',validar_nombre,controller.buscar_nombre);
router.get('/vista',controller.mostrar_vista); //ver
module.exports=router;
