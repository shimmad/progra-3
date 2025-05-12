const http=require('http'); //importo modulo http para crear servidor
const fs=require('fs'); //importo modulo fs para leer archivos
const path=require('path'); //importo modulo path para trabajar con rutas de archivos

const PORT=3000; //defino puerto donde escuchará el servidor, puerto 3000 por defecto
// la eleccion de puerto es opcional, pero es buena práctica escuchar en un puerto diferente a 80 por seguridad
// el numero 80 es el puerto por defecto para el protocolo http, por lo que si se escucha en ese puerto se puede acceder a la pagina web desde cualquier lugar del mundo
// el numero 3000 es un puerto personalizado que se escucha en el localhost, es decir, solo se puede acceder desde la misma computadora donde se ejecuta el servidor
// el rango de puertos personalizados va desde el 3000 hasta el 3999. Esto es porque los primeros 3000 puertos son reservados para servicios de internet, como el 80 para http y el 443 para https.

const server=http.createServer((req,res)=>{ //creo servidor
    //obtengo url solicitada por el cliente
    const url=req.url; 

    //ruta basica
    if (url==='/'){ //si la url es /
        res.writeHead(200,{'Content-Type':'text/html'}); //respondo con un codigo de estado 200, que significa que la solicitud fue exitosa
        res.write('<h1>Server en funcionamiento</h1>'); //respondo con un mensaje de texto
        res.end(); //termino la respuesta
    }
    // ruta /about
    else if (url==='/about'){ //si la url es /about 
        res.writeHead(200,{'Content-Type':'text/html'}); //respondo con un codigo de estado 200, que significa que la solicitud fue exitosa
        res.write('<h1>About</h1>'); //about es una pagina estatica que se muestra en el navegador
        res.end(); //termino la respuesta
    }
    //servir un archivo 
    else if (url === '/archivo'){ //si la url es /archivo
        const filePath=path.join(__dirname,'archivo.txt'); //obtengo la ruta del archivo

        fs.readFile(filePath,'utf-8',(err,data)=>{ //leo el archivo
            if (err){ //si hay un error
                res.writeHead(500,{'Content-Type':'text/plain'}); //respondo con un codigo de estado 500, que significa que ocurrio un error
                res.write('Error en el servidor'); //respondo con un mensaje de texto
                res.end(); //termino la respuesta
                return; //salgo de la funcion
            }

            res.writeHead(200,{'Content-Type':'text /plain'}); //respondo con un codigo de estado 200, que significa que la solicitud fue exitosa
            res.write(data); //respondo con el contenido del archivo
            res.end(); //termino la respuesta
        })
    }
  //ruta no encontrada
  else{ //si la url no es ninguna de las anteriores
    res.writeHead(404,{'Content-Type':'text/html'}); //respondo con un codigo de estado 404, que significa que la pagina no fue encontrada
    res.write('Pagina no encontrada'); //respondo con un mensaje de texto
    res.end(); //termino la respuesta
    };
});

server.listen(PORT,()=>{ //inicio el servidor
    console.log(`Servidor escuchando en el puerto ${PORT}`); //muestro en consola que el servidor esta escuchando
    });