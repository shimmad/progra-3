// uso clases para los controladores

const { Ejercicio } = require('../models');

class EjercicioController {
    static async getAll(req, res) {
       const ejercicios = await Ejercicio.findAll();
       res.json(ejercicios);
    }
    static async getOne(req, res) {
        const ejercicio = await Ejercicio.findByPk(req.params.id);
        res.json(ejercicio);
    }
    static async create(req, res) { //necesita JOI para ver que los datos sean correctgos
        const ejercicio = await Ejercicio.create(req.body);
        res.json(ejercicio);
    }
    static async update(req, res) { //necesita JOI para ver que los datos sean correctgos
        const [filasActualizadas] = await Ejercicio.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (filasActualizadas === 1) {
            const ejercicio = await Ejercicio.findByPk(req.params.id);
            res.status(200).json(ejercicio);
        } else {
            res.status(404).json({ error: 'Ejercicio no encontrado' });
        }

    }
    static async delete(req, res) {
        try{
            const ejercicio = await Ejercicio.findByPk(req.params.id);
            if (!ejercicio) {
                res.status(404).json({ error: 'Ejercicio no encontrado' });
            }
            await ejercicio.destroy();
            res.json({ message: 'Ejercicio eliminado correctamente',
                ejercicioEliminado: ejercicio });
            }catch (error) {
                res.status(500).json({ error: 'Error al eliminar el ejercicio' });
 
            }
           
    }
    
    
}

module.exports = EjercicioController;