let turnos=[
    {id:1, paciente: 'marti', fecha:'2025-05-05'},
    {id:2, paciente: 'jime', fecha:'2025-04-28'}
];

exports.obt_todos=(req,res)=>{
    res.json(turnos);
};

exports.crear=(req,res) =>{
       const nuevo_turno={
        id: turnos.length +1,
        paciente: req.body.paciente,
        fecha: req.body.fecha

    };
    turnos.push(nuevo_turno);
    res.status(201).json(nuevo_turno)
};

exports.eliminar=(req,res)=>{
     const id= parseInt(req.params.id);
    turnos=turnos.filter(t=>t.id !==id);
    res.json({mensaje:'turno eliminado'});
};

exports.buscar_nombre=(req,res)=>{
    res.send('turno para ' +req.params.nombre);
};

exports.mostrar_vista=(req, res)=>{
    res.render('inicio',{turnos,
        nombre: "jime"
    });//renderiza el archivo inicio conlos datos q t doy
};