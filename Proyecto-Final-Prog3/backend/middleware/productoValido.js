const Joi = require('joi');

const ProductoSchema = Joi.object({
    nombre: Joi.string().required(),
    descripcion: Joi.string().required(),
    precio: Joi.number().required(),
    img: Joi.string().required()
})

module.exports = (req, res, next) => {
    const { error } = ProductoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}