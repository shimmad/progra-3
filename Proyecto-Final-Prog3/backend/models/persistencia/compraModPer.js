const db = require ('..');
const CompraEntidad = require ('../../entities/Compra');

class CompraModPer {
    static async obtenerTodos() {
    const compra = await db.Compra.findAll();
    if (compra) {
        return compra.map(compra => new CompraEntidad(compra.id, compra.producto_id, compra.usuario_id, compra.fecha, compra.cantidad, compra.precio_total));
    } else {
        return [];
    } //mmm otra verificacion de null
    }
    static async obtenerPorId(id) {
        if  (!id) { return null; }
        const compra = await db.Compra.findByPk(id);
        return compra ? new CompraEntidad(compra.id, compra.producto_id, compra.usuario_id, compra.fecha, compra.cantidad, compra.precio_total): null;
    }
    static async obtenerPorUsuario(id) {
        if (!id) { return null; }
        const compra = await db.Compra.findAll({
            where: { usuario_id: id }
        });
        return compra.map(compra => new CompraEntidad(compra.id, compra.producto_id, compra.usuario_id,compra.fecha, compra.cantidad, compra.precio_total));
    }
    static async crear (compra) {
        const nuevaCompra = await db.Compra.create({
            producto_id: compra.producto_id,
            usuario_id: compra.usuario_id,
            fecha: compra.fecha,
            cantidad: compra.cantidad,
            precio_total: compra.precio_total
        });
        return new CompraEntidad(nuevaCompra.id, compra.producto_id, compra.usuario_id, compra.fecha, compra.cantidad, compra.precio_total);
    }
    static async actualizar(id, compra) {
        if (!id) { return null; }
        const compraActualizada = await db.Compra.update({
            producto_id: compra.producto_id,
            usuario_id: compra.usuario_id,
            fecha: compra.fecha,
            cantidad: compra.cantidad,
            precio_total: compra.precio_total
        }, {
            where: { id: id }
        });
        if (compraActualizada[0] === 0) { return null;
        }

        const compraActualizado = await db.Compra.findByPk(id);
        return new CompraEntidad(compraActualizado.id, compraActualizado.producto_id, compraActualizado.usuario_id,compraActualizado.cantidad, compraActualizado.precio_total);
    }
    static async eliminar(id) {
        if (!id) { return null; }
        const filasEliminadas = await db.Compra.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }
}

module.exports = CompraModPer;