const db = require ('..');
const SeguimientoEntidad = require ('../../entities/Seguimiento');

class SeguimientoModPer {
    static async obtenerTodos() {
        const seguimientos = await db.Seguimiento.findAll();
        return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
    }
    static async obtenerPorChallenge(id) {
        const seguimientos = await db.Seguimiento.findAll({
            where: {challenge_id: id}
        });
        return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
    }
    static async crear (seguimiento) {
        const nuevoSeguimiento = await db.Seguimiento.create({
            usuario_id: seguimiento.usuario_id,
            challenge_id: seguimiento.challenge_id,
            dia: seguimiento.dia,
            completado: seguimiento.completado
        });
        return new SeguimientoEntidad(nuevoSeguimiento.id, nuevoSeguimiento.usuario_id, nuevoSeguimiento.challenge_id, nuevoSeguimiento.dia, nuevoSeguimiento.completado);
    }
    static async actualizar (id, seguimiento) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.Seguimiento.update({
            usuario_id: seguimiento.usuario_id,
            challenge_id: seguimiento.challenge_id,
            dia: seguimiento.dia,
            completado: seguimiento.completado
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }

        const seguimientoActualizado = await db.Seguimiento.findByPk(id);
        return new SeguimientoEntidad(seguimientoActualizado.id, seguimientoActualizado.usuario_id, seguimientoActualizado.challenge_id, seguimientoActualizado.dia, seguimientoActualizado.completado);
    }
    static async eliminar (id) {
        if (!id) { return null; }
        const filasEliminadas = await db.Seguimiento.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }

}

module.exports = SeguimientoModPer