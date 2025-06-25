module.exports=(req,res,next)=>{
    if(!req.params.nombre){
        return res.status(400).send("Falta el nombre");
    }
    next();
};