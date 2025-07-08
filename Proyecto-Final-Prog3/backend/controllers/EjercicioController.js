// uso clases para los controladores

const EjercicioModPer = require('../models/persistencia/ejercicioModPer');
const EjercicioEntidad = require('../entities/Ejercicio');


class EjercicioController {
    static async getAll(req, res) {
       const ejercicios = await EjercicioModPer.obtenerTodos();
       if (!ejercicios || ejercicios.length === 0) {
           return res.status(404).json({ error: 'No se encontraron ejercicios' });
       }
       res.status(200).json(ejercicios);
    }
    static async getOne(req, res) {
        const ejercicio = await EjercicioModPer.obtenerPorId(req.params.id);
        if (!ejercicio) {
            return res.status(404).json({ error: 'Ejercicio no encontrado' });
        }
        res.status(200).json(ejercicio);
    }
    static async create(req, res) { //necesita JOI para ver que los datos sean correctgos
        try {
            const nuevoEjercicio= new EjercicioEntidad(null, req.body.nombre, req.body.tipo, req.body.video_url, req.body.descripcion);
            const ejercicio = await EjercicioModPer.crear(nuevoEjercicio);
            res.status(201).json(ejercicio);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el ejercicio' });
        }
    }
    static async update(req, res) { //necesita JOI para ver que los datos sean correctgos
        try {
            const datos = new EjercicioEntidad(req.params.id, req.body.nombre, req.body.tipo, req.body.video_url, req.body.descripcion);
            const actualizado = await EjercicioModPer.actualizar(req.params.id, datos);
            if (!actualizado) {
                return res.status(404).json({ error: 'No se encontro el ejercicio con el id ' + req.params.id });
            }
            res.status(200).json(actualizado);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el ejercicio' });
        }

    }
    static async delete(req, res) {
        try{
            const eliminado = await EjercicioModPer.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'No se encontro el ejercicio con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'Ejercicio eliminado correctamente' });
            } catch (error) {
              res.status(500).json({ error: 'Error al eliminar el ejercicio' });
            
            }
           
    }

    
    
}

module.exports = EjercicioController;