class Seguimiento {
    constructor(id, usuario_id, challenge_id, dia, completado) {
        this.id = id;
        this.usuario_id = usuario_id;
        this.challenge_id = challenge_id;
        this.dia = dia;
        this.completado = completado;
    }
}

module.exports = Seguimiento;