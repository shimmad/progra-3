const ChallengeModPer = require('../models/persistencia/challengeModPer');
const ChallengeEntidad = require('../entities/Challenge');

class CahllengeController {
    static async getAll(req, res) {
        const challenges = await ChallengeModPer.obtenerTodos();
        if (!challenges || challenges.length === 0) {
            return res.status(404).json({ error: 'No se encontraron challenges' });
        }
        res.status(200).json(challenges);
    }
    static async getOne(req, res) {
        const challenge = await ChallengeModPer.obtenerPorId(req.params.id);
        if (!challenge) {
            return res.status(404).json({ error: 'Challenge no encontrado' });
        }
        res.status(200).json(challenge);
    }
    static async create(req, res) {
        try{
            const nuevaChallenge = new ChallengeEntidad(null, req.body.nombre, req.body.descripcion, req.body.fecha_inicio, req.body.fecha_fin);
            const challengeCreado = await ChallengeModPer.crear(nuevaChallenge);
            res.status(201).json(challengeCreado);
        }catch (error) {
            res.status(500).json({ error: 'Error al crear el challenge' });
        }
    }
    static async update(req, res) {
       try {
        const datos = new ChallengeEntidad(req.params.id, req.body.nombre, req.body.descripcion, req.body.fecha_inicio, req.body.fecha_fin);
        const actualizado = await ChallengeModPer.actualizar(req.params.id, datos);
        if (!actualizado) {
            return res.status(404).json({ error: 'No se encontro el challenge con el id ' + req.params.id });
        }
        res.status(200).json(actualizado);
       } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el challenge' });
       }

    }
    static async delete(req, res) {
        try{
            const eliminado = await ChallengeModPer.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'No se encontro el challenge con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'Challenge eliminado correctamente' });
            } catch (error) {
              res.status(500).json({ error: 'Error al eliminar el challenge' });
            
            }
    }
}

module.exports = CahllengeController
