const EventEmitter = require('events'); // importamos el modulo events

const emisor = new EventEmitter(); // creamos una instancia del objeto EventEmitter

//registro un listener para el evento 'mensjae'
emisor.on('mensaje', (texto) => {
    console.log(`Hola:`, texto);

});

//emite el evento 'mensaje'
emisor.emit('mensaje', 'Hola mundo de eventos!');



//servidor con eventos
const http = require('http'); // importamos el modulo http
const server = http.createServer();

//el server es un EventEmitter,que es un objeto que emite eventos, los maneja

server.on('request', (req, res) => { //cuando se haga una peticion
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola desde el servidor!');
});

server.on('listening', () => {// cuando el servidor este escuchando
    console.log('Servidor escuchando en el puerto 3000');
});

server.on('error', (err) => {
    console.error('Error en el servidor:', err);
});

//inicio en el puerto 3000
server.listen(3000);

//operaciones asincronas
//ejemplo de asincronia con promesas
const fs = require('fs/promises'); // importamos el modulo fs promisas
//leer un archivo

//el async await es un 
// patron de programacion asincrona que permite escribir codigo 
// que se ejecuta de forma asincrona, es decir, sin bloquear el hilo de ejecucion
async function leerArchivo() {
   try {
      const data = await fs.readFile('archivo.txt', 'utf8');
      console.log('Datos:',data);
   } catch (err) {
      console.error('Error:',err);
   }
}

leerArchivo();

//ejemplo de asincronia con callbacks
const fs = require('fs'); // importamos el modulo fs(file system)
//leer un archivo fs.readFile
//escribir un archivo fs.writeFile
//listar contenido de un directorio fs.readdir
//verificar si un archivo existe fs.exists
//verificar si un directorio existe fs.existsSync
//crear un directorio fs.mkdir
//eliminar un archivo fs.unlink
//eliminar un directorio fs.rmdir
fs.readFile('archivo.txt', 'utf8', (err, data) => {
   if (err) {
      console.error('Error:',err);
   } else {
      console.log('Datos:',data);
   }
});

//modulo path
/*
ayuda para trabajar con rutas de archivos y directorios
path.join(): une varios segmentos de ruta en una sola ruta
path.resolve(): devuelve la ruta absoluta de un archivo o directorio
path.basename(): devuelve el nombre de un archivo o directorio
path.extname(): devuelve la extensión de un archivo

*/

// express

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
