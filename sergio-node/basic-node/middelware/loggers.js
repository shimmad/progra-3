module.exports=(req,res,next)=>{
    console.log(`Peticion: ${req.method} ${req.url}`);
    next();
};