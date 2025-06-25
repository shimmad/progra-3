const express = require('express');
const app = express();
const data = [{
    nombre: "jime",
    id: 1,
    email: "jime@jime.com",
    password: "1234"
}];

//primer parametro es la ruta, el segundo es la funcion con 2 parametros, req y res
//node --watch index.js para que se vaya actualizanso a medida que hago cambios, o lo agrego en scripts de packagejson "dev": "node --watch index.js", y luego ejecuto npm run dev
app.get('/', (req, res) => { 
    res.send(data);
    //res.json(data);
    res.status(200).json(data);
});

app.post('/', (req, res) => {
    //validaciones
    const nombre= req.body.nombre;
    const id= req.body.id;
    const email= req.body.email;
    const password= req.body.password;
    data.push({nombre, id, email, password});
    
    res.json({mensaje: "paciente creado"});
});
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});