//comando npm init -y  para crear el package.json q describe el proyecto (nombre version) y guarda dependecnias (express jwt, joi), especifica scripts (como corre el serfvidor).
//package-lock.json -> registra versiones exactas de cada dependencia y garantiza q el proyecto funcion igual en todas las pc
// npm install express para instalar libreria express
//node chat-server.js para visitar en el navegador la direccion
/*  //node con httop nativo
const http= require ('http'); 

const server= http.createServer((req,res)=>{
    res.end('Hola desde node!')
});

server.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
});
*/
//empiezo a usar express
const express = require('express');
//npm install morgan
const morgan = require('morgan'); //middleware de terceros para logs automaticos
const logger = require('./middelware/loggers');
const turnosRoutes=require('./routes/turnos');
const path=require('path');


const app =  express();
//ahora voy a crear una mini Api de turnos
app.set('view engine', 'ejs'); //uquiero usar motro de plantill
app.set('views',path.join(__dirname, 'views')); //carpeta donde estaran las vitsas

app.use(express.json()); // para leer el json dlel Body cyando pido req.body. 
//intercepta las peticiones q llegan al servidor, permite registrar logs como metodo y ruta de cada solicitud
// aplicar validaciones de sguridad mas adelantew
// hacer cosas antes q el servidor responda

app.use(logger);

app.use(morgan('dev'));

//solo se ejecuta si cumpke ka condicion ?admin=true
app.use((req,res, next)=>{
    if (req.query.admin ==='true'){
        console.log('Usuario admin')
    }
    next();
});


app.use('/api/turnos',turnosRoutes);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("algo salio mal")
});

const turnos=require('./controllers/turnosController');
app.get('/',turnos.mostrar_vista);


app.listen(3000, ()=>{
    console.log("server corriendo en http://localhost:3000")
});
//instalo motor ejs para empezara a trabnajar con views
// npm install ejs