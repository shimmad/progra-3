const {Seguimiento} = require('../models');

class SeguimientoController {
    static async getAll(req, res) {
        const seguimientos = await Seguimiento.findAll();
        res.json(seguimientos);
    }
    static async create(req, res) {
        const seguimiento = await Seguimiento.create(req.body);
        res.json(seguimiento);
    }

    static async update(req, res) {
        const seguimiento = await Seguimiento.findByPk(req.params.id);
        if (!seguimiento) {
            res.status(404).json({ error: 'Seguimiento no encontrado' });
        }
        await seguimiento.update(req.body);
        res.json(seguimiento);
    }

    static async delete(req, res) {
        const seguimiento = await Seguimiento.findByPk(req.params.id);
        if (!seguimiento) {
            res.status(404).json({ error: 'Seguimiento no encontrado' });
        }
        await seguimiento.destroy();
        res.json({ message: 'Seguimiento eliminado correctamente' });
    }
    static async getAllChallenge(req, res) { //registro los seguimientosd de un challenge
        const seguimientos = await Seguimiento.findAll({
            where: {
                challenge_id: req.params.id
            }
        });
        res.json(seguimientos);
    }

}

module.exports = SeguimientoController;