//funciones a exportar
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

//exportar las funciones para que esten disponibles en otros archivos
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};

