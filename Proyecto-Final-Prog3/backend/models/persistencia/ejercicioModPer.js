const db = require ('..');
const EjercicioEntidad = require ('../../entities/Ejercicio');

class EjercicioModPer {
    static async obtenerTodos() {
        const ejercicios = await db.Ejercicio.findAll();
        return ejercicios.map(ejercicio => new EjercicioEntidad(ejercicio.id, ejercicio.nombre, ejercicio.tipo, ejercicio.video_url, ejercicio.descripcion));
    }

    static async obtenerPorId(id) {
        if (!id) { return null; }
        const ejercicio = await db.Ejercicio.findByPk(id);
        return ejercicio ? new EjercicioEntidad(ejercicio.id, ejercicio.nombre, ejercicio.tipo, ejercicio.video_url, ejercicio.descripcion): null;
    }

    static async crear(ejercicio) {
        const nuevoEjercicio = await db.Ejercicio.create({
            nombre: ejercicio.nombre,
            tipo: ejercicio.tipo,
            video_url: ejercicio.video_url,
            descripcion: ejercicio.descripcion
        });
        return new EjercicioEntidad(nuevoEjercicio.id, nuevoEjercicio.nombre, nuevoEjercicio.tipo, nuevoEjercicio.video_url, nuevoEjercicio.descripcion);
    }

    static async actualizar(id, ejercicio) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.Ejercicio.update({
            nombre: ejercicio.nombre,
            tipo: ejercicio.tipo,
            video_url: ejercicio.video_url,
            descripcion: ejercicio.descripcion
        }, {
            where: {id: id}
        });
        if (filasActualizadas === 0){ return null;}

        const ejercicioActualizado = await db.Ejercicio.findByPk(id);
        return new EjercicioEntidad(ejercicioActualizado.id, ejercicioActualizado.nombre, ejercicioActualizado.tipo, ejercicioActualizado.video_url, ejercicioActualizado.descripcion);
    }

    static async eliminar(id) {
        if (!id) { return null; }
        const filasEliminadas = await db.Ejercicio.destroy({
            where: {id: id}
        });
        return filasEliminadas === 1;
    }
}

module.exports = EjercicioModPer;