const CompraModPer = require('../models/persistencia/compraModPer');
const productoModPer = require('../models/persistencia/productoModPer');
const CompraEntidad = require('../entities/Compra');
const UsuarioModPer = require('../models/persistencia/usuarioModPer');

class CompraController {
        static async getAll(req, res) {
        const compras = await CompraModPer.obtenerTodos();
        if (!compras || compras.length === 0) {
            return res.status(404).json({ error: 'No se encontraron compras' });
        }
        res.status(200).json(compras);
    }
    static async getOne(req, res) {
        const compra = await CompraModPer.obtenerPorId(req.params.id);        
        if (!compra) {
            return res.status(404).json({ error: 'No hay compra con id ' + req.params.id  });
        }
        
        res.status(200).json(compra);
    }
        static async getAllByUsuario(req, res) {
            try{
        const compras = await CompraModPer.obtenerPorUsuario(req.params.id);
        if (!compras || compras.length === 0) {
            return res.status(404).json({ error: 'No se encontraron compras para el usuario' });
        }
        const comprasConProductos = await Promise.all(compras.map(async compra => {
            const producto = await productoModPer.obtenerPorId(compra.producto_id);
            compra.producto = producto;
            return compra;
        }))
        res.status(200).json(comprasConProductos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las compras del usuario' });
        }
    }
    
    static async create(req, res) {
        try {
            const { usuario_id, producto_id, cantidad, fecha } = req.body;
            const usuario = await UsuarioModPer.obtenerPorId(usuario_id);
            const producto = await productoModPer.obtenerPorId(producto_id);

            if (!usuario || !producto) {
                return res.status(404).json({ error: 'No se encontro el usuario o el producto' });
            }
            const precio_total = producto.precio * cantidad;
            const nuevaCompra = new CompraEntidad(null, usuario_id, producto_id, fecha, cantidad, precio_total);
            const compra = await CompraModPer.crear(nuevaCompra);
            res.status(201).json(compra);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la compra', detalle: error.message});
        
      
    }}
    static async update (req, res) {
        try {
            const datos = new CompraEntidad(req.params.id, req.body.usuario_id, req.body.producto_id, req.body.cantidad, req.body.fecha);
            const actualizado = await CompraModPer.actualizar(req.params.id, datos);
            if (!actualizado) {
                return res.status(404).json({ error: 'No se encontro la compra con el id ' + req.params.id });
            }
            res.status(200).json(actualizado);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar la compra' });
        }
    }
          

    static async delete(req, res) {
        try{
            const eliminado = await CompraModPer.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'No se encontro la compra con el id ' + req.params.id });
            }
            res.status(200).json({ message: 'Compra eliminada correctamente' });
            } catch (error) {
              res.status(500).json({ error: 'Error al eliminar la compra' });
            
            }
    }
    

}

module.exports = CompraController;