const SeguimientoModPer  = require('../models/persistencia/seguimientoModPer');
const ChallengeModPer = require('../models/persistencia/challengeModPer');
const SeguimientoEntidad = require('../entities/Seguimiento');

class SeguimientoController {
    static async getAll(req, res) {
        const seguimientos = await SeguimientoModPer.obtenerTodos();
        if (!seguimientos || seguimientos.length === 0) {
            return res.status(404).json({ error: 'No se encontraron seguimientos' });
        }

        res.status(200).json(seguimientos);
    }
    static async getAllByChallenge(req, res) { //registro los seguimientosd de un challenge
        const challengeID = Number(req.params.id); 
        const seguimientos = await SeguimientoModPer.obtenerPorChallenge(challengeID);
        if (!seguimientos || seguimientos.length === 0) {
            return res.status(404).json({ error: 'No se encontraron seguimientos' });
        }
        res.status(200).json(seguimientos);
    }
    static async create(req, res) {
        try{
        const nuevoSeguimiento = new SeguimientoEntidad(null, req.body.usuario_id, req.body.challenge_id, req.body.dia, req.body.completado);
        const seguimiento = await SeguimientoModPer.crear(nuevoSeguimiento);
        res.status(201).json(seguimiento);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el seguimiento' });
        }
    }

    static async update(req, res) {
        try{
            const datos = new SeguimientoEntidad(req.params.id, req.body.usuario_id, req.body.challenge_id, req.body.dia, req.body.completado);
            const actualizado = await SeguimientoModPer.actualizar(req.params.id, datos);
            if (!actualizado) {
                return res.status(404).json({ error: 'No se encontro el seguimiento con el id ' + req.params.id });
            }
            res.status(200).json(actualizado);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el seguimiento' });
        }
    }

    static async delete(req, res) {
        try {
            const eliminado = await SeguimientoModPer.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'No se encontro el seguimiento con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'Seguimiento eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el seguimiento' });
        }
    }
    

}

module.exports = SeguimientoController;