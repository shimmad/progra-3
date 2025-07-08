const ProductoModPer = require('../models/persistencia/productoModPer');
const ProductoEntidad  = require('../entities/Producto');

class ProductoController {
     static async listarProductos(req, res) {
        const productos = await ProductoModPer.obtenerTodos();
        if (!productos || productos.length === 0) {
            return res.status(404).json({ error: 'No se encontraron productos' });
        }
        res.status(200).json(productos);
    }
    static async GetOne(req, res) {
        const producto = await ProductoModPer.obtenerPorId(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    }
    static async create(req, res) {
        try {
            const nuevoProducto = new ProductoEntidad(null, req.body.nombre,req.body.descripcion, req.body.precio, req.body.img );
            const producto = await ProductoModPer.crear(nuevoProducto);
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el producto' });
        }
    }
    static async update(req, res) {
       try {
        const datos = new ProductoEntidad(req.params.id, req.body.nombre, req.body.descripcion, req.body.precio, req.body.img);
        const productoActualizado = await ProductoModPer.actualizar(req.params.id, datos);
        if (!productoActualizado) {
            return res.status(404).json({ error: 'No se encontro el producto con el id ' + req.params.id });
        }
        res.status(200).json(productoActualizado);
       } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
       }
    }
    static async delete(req, res) {
        try {
            const eliminado = await ProductoModPer.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'No se encontro el producto con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }

}

module.exports = ProductoController
