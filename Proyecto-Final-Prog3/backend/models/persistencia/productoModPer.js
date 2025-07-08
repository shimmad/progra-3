const db = require ('..');
const ProductoEntidad = require ('../../entities/Producto');

class ProductoModPer {
    static async obtenerTodos() {
        const productos = await db.Producto.findAll();
        return productos.map(producto => new ProductoEntidad(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.img));
    }
    static async obtenerPorId(id) {
        if (!id) {return null; }
        const producto = await db.Producto.findByPk(id);
        return producto ? new ProductoEntidad(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.img):null;
    }
    static async crear (producto) {
        const nuevoProducto = await db.Producto.create({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            img: producto.img
        });
        return new ProductoEntidad(nuevoProducto.id, nuevoProducto.nombre, nuevoProducto.descripcion, nuevoProducto.precio, nuevoProducto.img);
    }
    static async actualizar (id, producto) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.Producto.update({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            img: producto.img
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }

        const productoActualizado = await db.Producto.findByPk(id);
        return new ProductoEntidad(productoActualizado.id, productoActualizado.nombre, productoActualizado.descripcion, productoActualizado.precio, productoActualizado.img);
    }
    static async eliminar(id) {
        if (!id) {return null; }
        const filasEliminadas = await db.Producto.destroy({
            where: {id: id}
        });
        return filasEliminadas === 1;
    }
}

module.exports = ProductoModPer;