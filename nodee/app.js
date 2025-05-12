//importo modulo http de nodejs
const http = require('http');
// def el puerto q escuchara el servidor
const port = 3000;
// creo un servidor
const server = http.createServer((req, res) => {
    // establezco el encabezado de rpta con tipo de content texto plano
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // envio el mensaje
    res.end('mi primer servidor en nodejs!');
});
// inicio el servidor en el puerto 3000
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});

//importo modulo creado por mi
const math = require('./math');

//uso las funciones del modulo
console.log(math.sumar(5, 3)); // 8
console.log(math.restar(5, 3)); // 2
console.log(math.multiplicar(5, 3)); // 15
console.log(math.dividir(5, 3)); // 1.6666666666666667

// rutas y middleeware
const express = require('express'); // importo express
const app = express(); // creo una instancia de express 
const usuarosRoutes = require('./routes/usuarios'); // importo el modulo de rutas de usuarios

// uso las rutas de usuarios
app.use('/usuarios', usuarosRoutes); // uso las rutas de usuarios

// inicio el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000');
});













