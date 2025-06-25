const {Challenge} = require('../models')

class CahllengeController {
    static async getAll(req, res) {
        const challenges = await Challenge.findAll()
        res.json(challenges)
    }
    static async getOne(req, res) {
        const challenge = await Challenge.findByPk(req.params.id)
        res.json(challenge)
    }
    static async create(req, res) {
        const challenge = await Challenge.create(req.body)
        res.json(challenge)
    }
    static async update(req, res) {
        const [filasActualizadas] = await Challenge.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (filasActualizadas === 1) {
            const challenge = await Challenge.findByPk(req.params.id);
            res.status(200).json(challenge);
        } else {
            res.status(404).json({ error: 'Challenge no encontrado' });
        }

    }
    static async delete(req, res) {
        try{
            const challenge = await Challenge.findByPk(req.params.id);
            if (!challenge) {
                res.status(404).json({ error: 'Challenge no encontrado' });
            }
            await challenge.destroy();
            res.json({ message: 'Challenge eliminado correctamente',
                challengeEliminado: challenge });
            }catch (error) {
                res.status(500).json({ error: 'Error al eliminar el challenge' });
 
            }
    }
}

module.exports = CahllengeController
