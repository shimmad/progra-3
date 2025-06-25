const {Usuario} = require('../models');
const usuario = require('../models/usuario');

class UsuarioController {

    static async getAll(req, res)  {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    }
    static async getOne(req, res) {
        const usuario = await Usuario.findByPk(req.params.id);
        res.status(200).json(usuario);
    }
    static async create(req, res) {
//agrego mesaje de error por si quieren registrar el mail devuelta, cuando entidad usuario se indica q el mail es unico
        try {
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({ error: 'El correo electrónico ya está en uso' });
            } else {
                res.status(500).json({ error: 'Error al crear el usuario' });
            }
        }
    }
    //mejoro rpta de api para q muestre usario actualizado y no el numero de filas cambiadas
    static async update(req, res) {
        const [filasActualizadas] = await Usuario.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (filasActualizadas === 1) {
            const usuario = await Usuario.findByPk(req.params.id);
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    }
    static async delete(req, res) {
        try{
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.json({ message: 'Usuario eliminado correctamente',
            usuarioEliminado: usuario });
        }catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
 
        }
    }
}

module.exports = UsuarioController;