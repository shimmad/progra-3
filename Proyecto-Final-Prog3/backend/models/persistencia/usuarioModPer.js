const db = require ('..');
const UsuarioEntidad = require ('../../entities/Usuario');

class UsuarioModPer {
    //modelo de persistencia
    static async obtenerTodos() {
        const usuarios = await db.Usuario.findAll();
        //conviwerw cada usuario en entidad de js
        return usuarios.map(u => new UsuarioEntidad(u.id, u.nombre, u.email, u.password, u.rol));
    }

    static async obtenerPorId(id) {
        if (!id) { return null; }
        const usuario = await db.Usuario.findByPk(id);
        return usuario ? new UsuarioEntidad(usuario.id, usuario.nombre, usuario.email, usuario.password, usuario.rol): null;
    /*if (usuario) {
  return new UsuarioEntidad(usuario.id, usuario.nombre, usuario.email, usuario.password, usuario.rol);
} else {
  return null;
} */
    }

    static async crear(usuario) {
        const nuevoUsuario = await db.Usuario.create({
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
            rol: usuario.rol
        });
        return new UsuarioEntidad(nuevoUsuario.id, nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.password, nuevoUsuario.rol);
    }

    static async actualizar(id, usuario) {
        if (!id) {return null; }
        const [filasActualizadas] = await db.Usuario.update({
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
            rol: usuario.rol
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }

        const usuarioActualizado = await db.Usuario.findByPk(id);
        return new UsuarioEntidad(usuarioActualizado.id, usuarioActualizado.nombre, usuarioActualizado.email, usuarioActualizado.password, usuarioActualizado.rol);
    }

    static async eliminar(id) {
        if (!id) {return null; }
        const filasEliminadas = await db.Usuario.destroy({
            where: {id: id}
        });
        return filasEliminadas === 1;
    }


}

module.exports = UsuarioModPer;