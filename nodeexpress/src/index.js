
const  express = require('express'); // importamos el modulo express
const app = express(); // creamos una instancia de express
const port = 5500; // definimos el puertode 


app.get('/', (req, res) => { // definimos una ruta para la raiz de la aplicacion
    res.send('Hello World!'); // enviamos un mensaje de bienvenida
});

app.listen(port, () => { // definimos el puerto de la aplicacion
    console.log(`Example app listening at http://localhost:${port}`); // mostramos un mensaje en la consola
});

//node se encarga de crear su propio servidor web
//npm init -y : crea el archivo package.json con los valores por defecto
// package.json : es un archivo que contiene los paquetes que se van a utilizar en la aplicacion
// npm install : instala los paquetes que se encuentran en el archivo package.json


//npm install express : instala el modulo express
//node index.js : ejecuta el archivo index.js
// 