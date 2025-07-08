const UsuarioModPer = require('../models/persistencia/usuarioModPer');
const UsuarioEntidad = require('../entities/Usuario');

class UsuarioController {

    static async getAll(req, res)  {
        const usuarios = await UsuarioModPer.obtenerTodos();
        if (!usuarios || usuarios.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
        }
        res.status(200).json(usuarios);
    }
    static async getOne(req, res) {
        const usuario = await UsuarioModPer.obtenerPorId(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'No hay usuario con id ' + req.params.id  });
        }
        res.status(200).json(usuario);
    }
    static async create(req, res) {
//agrego mesaje de error por si quieren registrar el mail devuelta, cuando entidad usuario se indica q el mail es unico
     try {
        const nuevoUsuario = new UsuarioEntidad(null, req.body.nombre, req.body.email, req.body.password, req.body.rol);
        const creado = await UsuarioModPer.crear(nuevoUsuario);
        res.status(201).json(creado);
     } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'El correo electrónico ya está en uso' });
        }
        res.status(500).json({ error: 'Error al crear el usuario' });
        
     }
    }

    //mejoro rpta de api para q muestre usario actualizado y no el numero de filas cambiadas
    static async update(req, res) {
        try{
        const datos = new UsuarioEntidad(req.params.id, req.body.nombre, req.body.email, req.body.password, req.body.rol);
        const actualizado = await UsuarioModPer.actualizar(req.params.id, datos);
       if (!actualizado) {
            return res.status(404).json({ error: 'No se encontro el usuario con el id ' + req.params.id });
        }
        res.status(200).json(actualizado);
        }catch (error) {
           
            if (error.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({ error: 'El correo electrónico ya está en uso' });
                //mmm me tomara mal si acutalizo con el mismo mail?
            } 
                res.status(500).json({ error: 'Error al actualizar el usuario' });
            
        }
    }
    static async delete(req, res) {
        try{
        const eliminado = await UsuarioModPer.eliminar(req.params.id);
        if (!eliminado) {
            return res.status(404).json({ error: 'No se encontro el usuario con el id ' + req.params.id });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
          res.status(500).json({ error: 'Error al eliminar el usuario' });
        
        }
    }
}

module.exports = UsuarioController;