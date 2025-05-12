const express=require('express');// importamos express
const path=require('path');// importamos path
const fs=require('fs');// importamos file system
const morgan=require('morgan');// importamos morgan: middleware para registrar solicitudes HTTP

const app=express();// creamos una instancia de express
const port=3000;// definimos el puerto

//middleware
app.use(morgan('dev'));// loggin
app.use(express.json());// parsear json
app.use(express.urlencoded({extended:true}));// parsear formularios
app.use(express.static('public'));// servir archivos estaticos

//middleware para finalizar mediciones de tiempo
app.use((req, res, next) => {
    const oldSend = res.send;
    res.send= function(data){
        console.log(`Tiempo de respuesta: ${Date.now() - req.tiempoInicio}ms`);
        oldSend.apply(res, arguments);
    };
    next();
});

//rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//rutas parametricas
app.get('/api/producto/:id', (req, res) => {
    const id=req.params.id;
    //simulmus busqueda en base de datos
    const producto={
        id:id,
        nombre:'Producto '+id,
        precio: Math.floor(Math.random() * 1000)
    };

    res.json(producto);
});

//rutas para api
const apiRouter= express.Router();

apiRouter.get('/usuarios', (req, res) => {
    res.json([
        {id:1, nombre:'ana'},
        {id:2, nombre:'juna'},
        {id:3, nombre:'maria'},
    ]);
});

apiRouter.post('/usuarios', (req, res) => {
    //accedemos a los datos enviador gracias al middleware express.json
    const nuevoUsuario=req.body;
    console.log('datos recibidos: ', nuevoUsuario);

    //simulamos la insercion en la base de datos
    res.json({
        id:1,
        nombre:'jimenez',
        email:'jimenez@gmail.com'   
    });

    res.status(201).json({
        mensaje: 'Usuario creado correctamente',
        usuario: nuevoUsuario
    });

});

//mmontamos el router en el app
app.use('/api', apiRouter);

//middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salio mal!');
});

//middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
    });

//iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
