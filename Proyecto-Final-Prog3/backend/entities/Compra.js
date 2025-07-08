class Compra {
    constructor(id, usuario_id, producto_id, fecha, cantidad, precio_total) {
        this.id = id;
        this.usuario_id = usuario_id;
        this.producto_id = producto_id;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.precio_total = precio_total;
        
    }
}    
module.exports = Compra;