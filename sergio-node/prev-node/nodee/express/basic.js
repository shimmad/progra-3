//importo express
//express: es un framework para node.js que nos permite crear aplicaciones web de manera sencilla
const express = require('express');
//creo una instancia de express
const app = express();
const port = 3000;

// defino ruta para pag principal
app.get('/', (req, res) => { // req: request, res: response
    res.send('Hola mundo desde express!');
});

//iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor express ejecutandose en http://localhost:${port}`);
});