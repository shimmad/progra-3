const db = require ('..');
const ChallengeEjEntidad = require ('../../entities/ChallengeEj');

class challengeEjModPer {

    static async obtenerTodos() {
        const challengeEj = await db.ChallengeEjercicio.findAll();
        return challengeEj.map(challengeEj => new ChallengeEjEntidad(challengeEj.id, challengeEj.challenge_id, challengeEj.ejercicio_id, challengeEj.dia, challengeEj.posicion));
    }
    /**
     * Devuelve todos los ChallengeEjercicio asociados a un Challenge
     * @param {number} id - El id del Challenge
     * @returns {Promise<ChallengeEjEntidad[]>} - Un array de ChallengeEjercicio
     */
    static async obtenerPorChallenge(id) {
        const challengeEj = await db.ChallengeEjercicio.findAll({
            where: {challenge_id: id}
        });
        return challengeEj.map(challengeEj => new ChallengeEjEntidad(challengeEj.id, challengeEj.challenge_id, challengeEj.ejercicio_id, challengeEj.dia, challengeEj.posicion));
    }
    static async crear (challengeEj) {
        const nuevoChallengeEj = await db.ChallengeEjercicio.create({
            challenge_id: challengeEj.challenge_id,
            ejercicio_id: challengeEj.ejercicio_id,
            dia: challengeEj.dia,
            posicion: challengeEj.posicion
        });
        return new ChallengeEjEntidad(nuevoChallengeEj.id, nuevoChallengeEj.challenge_id, nuevoChallengeEj.ejercicio_id, nuevoChallengeEj.dia, nuevoChallengeEj.posicion);

    }
    static async actualizar (id, challengeEj) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.ChallengeEjercicio.update({
            challenge_id: challengeEj.challenge_id,
            ejercicio_id: challengeEj.ejercicio_id,
            dia: challengeEj.dia,
            posicion: challengeEj.posicion
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }
    
        const challengeEjActualizado = await db.ChallengeEjercicio.findByPk(id);
        return new ChallengeEjEntidad(challengeEjActualizado.id, challengeEjActualizado.challenge_id, challengeEjActualizado.ejercicio_id, challengeEjActualizado.dia, challengeEjActualizado.posicion);
    }
    static async eliminar(id) {
        if (!id) { return null; }
        const filasEliminadas = await db.ChallengeEjercicio.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }


}

module.exports = challengeEjModPer