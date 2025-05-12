//organizacion de rutas en  express: archivos separados 
// archivo: routes/users.js
const express = require('express'); // importamos express
const router = express.Router(); // creamos un enrutador: instancia de express que nos permite definir rutas

// rutas que se montaran en /usustios/
router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

router.get('/:id', (req, res) => {
    res.send(`Usuario con id ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Crear usuario');
});

router.put('/:id', (req, res) => {
    res.send(`Actualizar usuario con id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Eliminar usuario con id ${req.params.id}`);
});

module.exports = router; // exportamos el enrutadorpara poderlo usar en otros archivos

// middleware: funciones que se ejecutan antes de que se ejecute una ruta
// funciones q tienen acceso a req y res y a la siguiente funcion en la cadena
// se ejecutan en el orden en que se definen
// se pueden usar para validar datos, autenticar usuarios, etc

//middkeware q se ejecuta en todas las solicitudes por el uso de app.use
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}-${new Date()}`);
    // el consol log muestra el metodo, la url y la fechade la solicitud
    next(); // se ejecuta la siguiente funcion en la cadena, LLAMA al siguiente middleware
});

//middleware de nivel de ruta
app.get('/usuario/:id', (req, res, next) => {
    //verificio si el usuario existe
    if (req.params.id === '123') {
        next(); // si existe, se ejecuta la siguiente funcion en la cadena
    } else {
        res.status(404).send('Usuario no encontrado'); // si no existe, se envia un error 404
    }
}, (req, res) => {
    //se ejecuta si next() fue llamaso
    res.send('Datos del usuario ${req.params.id}');
// $: sirve para concatenar cadenas
}); 

//middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack); // muestra el error en la consola
    res.status(500).send('Algo salio mal!'); // envia un error 500
});

//middleware de terceros
const morgan = require('morgan'); // middleware para registrar solicitudes HTTP
const bodyParser = require('body-parser'); // middleware para analizar el cuerpo de las solicitudes HTTP

app.use(morgan('dev')); // registra las solicitudes HTTP en la consola
app.use(bodyParser.json()); // parsear solicitudes HTTP con contenido JSON
app.use(bodyParser.urlencoded({ extended: true })); // parsear formularios

//rutas paramerricas permiten manejar URLS dinamicas

//parametro unico
app.get('/usuario/:id', (req, res) => {
    res.send(`Usuario con id ${req.params.id}`);
});

//parametros multiples
app.get('/usuario/:id/:nombre', (req, res) => {
    const { id, nombre } = req.params;
    res.send(`Usuario con id ${id} y nombre ${nombre}`);
});
//parametros opcionales
app.get('/usuario/:año?/:mes?/:dia?', (req, res) => {
    const { año, mes, dia } = req.params;
    res.send(`Usuario con año ${año}, mes ${mes} y dia ${dia}`);
});

//validacion de parametros
//middleware para validar un ID

function validarId(req, res, next) {
    const id = req.params.id;
    //valido q sea numero
    if (isNaN(id)) {
        res.status(400).send('El ID debe ser un numero');
    } else {
        //convierto a num y lo guardo en un req par uso posterior
        req.validarId = parseInt(id);
        next();
    }
}

//lo uso
app.get('/usuario/:id', validarId, (req, res) => {
    //aca req.validarId esta disponible y es el id validado
    res.send(`Usuario con id ${req.validarId}`);
});
// hay mas ---
//async/await: permite manejar promesas de forma mas sencilla de forma
//asincrona
//async: indica q una funcion es asincrona
//await: indica q una funcion debe esperar a q una promesa se resuelva
//async/await: 