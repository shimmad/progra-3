const express = require('express'); // importamos express
const app = express(); // creamos una instancia de express

//GET - obt recursos
app.get('/usuarios', (req, res) => {
    res.send('Lissta de usuarios');
});

//POST - crear recursos
app.post('/usuarios', (req, res) => {
    res.send('Creando un usuario');
});

//PUT - actualizar recursos
app.put('/usuarios/:id', (req, res) => {
    res.send(`Actualizando usuario con id ${req.params.id}`);
    //req.params.id es el id que se pasa en la url
});

//DELETE - eliminar recursos
app.delete('/usuarios/:id', (req, res) => {
    res.send(`Eliminando usuario con id ${req.params.id}`);
});


//objetos req 
//req.body: contiene los datos enviados en el cuerpo de la solicitud HTTP.
//req.params: contiene los parámetros de la ruta. URL
//req.query: contiene los parámetros de la consulta.query string
//req.headers: contiene los encabezados de la solicitud HTTP.
//req.ip: contiene la dirección IP de la solicitud 
//req.method: contiene el método HTTP de la solicitud.
//req.cookie: contiene las cookies de la solicitud.(requiere middleware: cookie-parser)
//req.path: contiene la ruta de la solicitud.

//objetos res 
//res.send: envía una respuesta HTTP con el cuerpo especificado.
//res.json: envía una respuesta HTTP con el cuerpo especificado en formato JSON.
//res.status: establece el código de estado de la respuesta HTTP.
//res.redirect: redirige la solicitud a otra URL.
//res.download: inicia la descarga de un archivo.
//res.sendFile: envía un archivo local como respuesta HTTP.
//res.cookie: establece una cookie en el cliente.

//esto se lee
// instancia. peticion ('ruta', (req, res) => {
app.get('/producto',(req,res)=>{
    //obt parametros de quety string(?id=123&categoria=electronica)
    const id = req.query.id;
    const categoria = req.query.categoria;

    res.status(200).json({
        id: id,
        categoria: categoria,
        mensaje: 'Producto encontrado'
    });
    
});


//ejecutamos el servidor en el puerto 3000 
//la ejecucion tiene que ser en el final del archivo?
//porque si no, el servidor no se ejecutara

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
