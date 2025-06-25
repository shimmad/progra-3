const {Compra, Producto} = require('../models');

class CompraController {
    static async create(req, res) {
        try {
            const {usuario_id, producto_id, cantidad, fecha} = req.body;
            const producto = await Producto.findByPk(producto_id);
            if (!producto) {
                res.status(404).json({ error: 'Producto no encontrado' });
                return;
            }
            const precio_unitario = producto.precio;
            const precio_total = precio_unitario * cantidad;
            const compra = await Compra.create({
                usuario_id,
                producto_id,
                cantidad,
                fecha,
                precio_total
            });
            res.status(201).json(compra);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la compra', detalle: error.message});
        
      
    }}
          
    static async getAllByUsuario(req, res) {
        const compras = await Compra.findAll({
            where: {
                usuario_id: req.params.id
            }
        });
        res.status(200).json(compras);
    }
    static async getAll(req, res) {
        const compras = await Compra.findAll();
        res.status(200).json(compras);
    }
    static async getOne(req, res) {
        const compra = await Compra.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(compra);
    }
    
    static async delete(req, res) {
        try{
            const compra = await Compra.findByPk(req.params.id);
            if (!compra) {
                res.status(404).json({ error: 'Compra no encontrada' });
                return;
            }
            await compra.destroy();
            res.json({ message: 'Compra eliminada correctamente',
                compraEliminada: compra });
            }catch (error) {
                res.status(500).json({ error: 'Error al eliminar la compra' });
        }
    }
    

}

module.exports = CompraController;