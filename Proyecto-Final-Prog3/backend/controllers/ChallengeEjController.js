const ChallengeEjModPer = require('../models/persistencia/challengeejercicioModPer');
//NECESITO modelo de ejercico y de challenge? .. si quiero dar mas info de cada ejercicio y challenge
const ChallengeEjEntidad   = require('../entities/ChallengeEj');
class ChallengeEjController {

      static async getAll(req, res) {
        const relation = await ChallengeEjModPer.obtenerTodos();
        if (!relation || relation.length === 0) {
            return res.status(404).json({ error: 'No se encontraron ChallengeEjercicio' });
        }
        res.status(200).json(relation);
    }
        static async getAllByChallenge(req, res) {
        const relation = await ChallengeEjModPer.obtenerPorChallenge(req.params.id);
        if (!relation || relation.length === 0) {
            return res.status(404).json({ error: 'No se encontraron ChallengeEjercicio' });
        }
        res.status(200).json(relation);
        //q ejercicios tiene challenge 1 en dia 3, en que orden
    }
   
    static async create(req, res) {
        try {
        const nuevaRelation = new ChallengeEjEntidad(null, req.body.challenge_id, req.body.ejercicio_id, req.body.dia, req.body.posicion);
        const relation = await ChallengeEjModPer.crear(nuevaRelation);
        res.status(201).json(relation);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el ChallengeEjercicio' });
        }
    }
  
    static async update(req, res) {
     try{
        const datos = new ChallengeEjEntidad(req.params.id, req.body.challenge_id, req.body.ejercicio_id, req.body.dia, req.body.posicion);
        const actualizado = await ChallengeEjModPer.actualizar(req.params.id, datos);
        if (!actualizado) {
            return res.status(404).json({ error: 'No se encontro el ChallengeEjercicio con el id ' + req.params.id });
        }
        res.status(200).json(actualizado);
     } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el ChallengeEjercicio' });
     }
    }
    static async delete(req, res) {
        try {
            const relation = await ChallengeEjModPer.eliminar(req.params.id);
            if (!relation) {
                return res.status(404).json({ error: 'No se encontro el ChallengeEjercicio con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'ChallengeEjercicio eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el ChallengeEjercicio' });
        }                       
    }


}
module.exports = ChallengeEjController