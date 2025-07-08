function catchAsync( fn ) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

module.exports = catchAsync;

/*
capturar errores de promesas
una funcion wrapper que recibe metodo async y lo ejecuta atrapando errores, pasandolo a express. 
evita repetir try/catch
lo tengo qq incluir en las rutas de los controladores 
envuelvo funcuiones async con el wrapper q pase los errores a next, asi express lo recibe en su middlewar de manejo de errores .*/