const {ChallengeEjercicio} = require('../models');
class ChallengeEjController {
    static async create(req, res) {
        const relation = await ChallengeEjercicio.create(req.body);
        res.status(201).json(relation);
    }
    static async getAll(req, res) {
        const relation = await ChallengeEjercicio.findAll();
        res.status(200).json(relation);
    }
    static async update(req, res) {
        const [filasActualizadas] = await ChallengeEjercicio.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (filasActualizadas === 1) {
            const relation = await ChallengeEjercicio.findByPk(req.params.id);
            res.status(200).json(relation);
        } else {
            res.status(404).json({ error: 'ChallengeEjercicio no encontrado' });
        }
        res.json({
            message: 'ChallengeEjercicio actualizado correctamente',
            ChallengeEjercicioActualizado: relation
        })
    }
    static async delete(req, res) {
        try {
            const relation = await ChallengeEjercicio.findByPk(req.params.id);
            if (relation) {
                await relation.destroy();
                res.status(200).json({ message: 'ChallengeEjercicio eliminado correctamente' });
            } else {
                res.status(404).json({ error: 'ChallengeEjercicio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el ChallengeEjercicio' });
        }
    }
    static async getAllByChallenge(req, res) {
        const relation = await ChallengeEjercicio.findAll({
            where: {
                challenge_id: req.params.id
            }
        });
        res.status(200).json(relation);
    }
   

//q ejercicios tiene challenge 1 en dia 3, en que orden

}
module.exports = ChallengeEjController