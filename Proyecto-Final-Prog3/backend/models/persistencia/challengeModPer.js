const db = require ('..');
const ChallengeEntidad = require ('../../entities/Challenge');

class ChallengeModPer {
    static async obtenerTodos() {
        const challenge = await db.Challenge.findAll();
        return challenge.map((challenge) => new ChallengeEntidad(challenge.id, challenge.nombre, challenge.descripcion, challenge.fecha_inicio, challenge.fecha_fin));
    }

    static async obtenerPorId(id) {
        if (!id) { return null; }
        const challenge = await db.Challenge.findByPk(id);
        return challenge ?new ChallengeEntidad(challenge.id, challenge.nombre, challenge.descripcion, challenge.fecha_inicio, challenge.fecha_fin): null;
    }

    static async crear (challenge) {
        const nuevoChallenge = await db.Challenge.create({
            nombre: challenge.nombre,
            descripcion: challenge.descripcion,
            fecha_inicio: challenge.fecha_inicio,
            fecha_fin: challenge.fecha_fin
        });
        return new ChallengeEntidad(nuevoChallenge.id, nuevoChallenge.nombre, nuevoChallenge.descripcion, nuevoChallenge.fecha_inicio, nuevoChallenge.fecha_fin);
    }
    static async actualizar (id, challenge) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.Challenge.update({
            nombre: challenge.nombre,
            descripcion: challenge.descripcion,
            fecha_inicio: challenge.fecha_inicio,
            fecha_fin: challenge.fecha_fin
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }

        const challengeActualizado = await db.Challenge.findByPk(id);
        return new ChallengeEntidad(challengeActualizado.id, challengeActualizado.nombre, challengeActualizado.descripcion, challengeActualizado.fecha_inicio, challengeActualizado.fecha_fin);
    }
    static async eliminar (id) {
        if (!id) { return null; }
        const filasEliminadas = await db.Challenge.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }
}

module.exports = ChallengeModPer;