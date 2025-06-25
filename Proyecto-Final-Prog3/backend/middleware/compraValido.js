const Joi = require('joi');


const compraSchema = Joi.object({
    usuario_id: Joi.number().required(),
    producto_id: Joi.number().required(),
    cantidad: Joi.number().min(1).required(),
    fecha: Joi.date().optional(),
    

});

module.exports = (req, res, next) => {
    const { error } = compraSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};