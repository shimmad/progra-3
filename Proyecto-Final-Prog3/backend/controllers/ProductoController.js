const {Producto} = require('../models')

class ProductoController {
     static async listarProductos(req, res) {
        const productos = await Producto.findAll();
        res.json(productos);
    }
    static async GetOne(req, res) {
        const producto = await Producto.findByPk(req.params.id);
        res.json(producto);
    }
    static async create(req, res) {
        const producto = await Producto.create(req.body);
        res.json(producto);
    }
    static async update(req, res) {
        const [filasActualizadas] = await Producto.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (filasActualizadas === 1) {
            const producto = await Producto.findByPk(req.params.id);
            res.status(200).json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({
            message: 'Producto actualizado correctamente',
            productoActualizado: producto
        })
    }
    static async delete(req, res) {
        try {
            const producto = await Producto.findByPk(req.params.id);
            if (!producto) {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
            await producto.destroy();
            res.json({ message: 'Producto eliminado correctamente',
                productoEliminado: producto });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }

}

module.exports = ProductoController
