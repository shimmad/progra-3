const Joi = require('joi');

const usuarioSchema = Joi.object({
    nombre: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    rol: Joi.string().required()
});

module.exports = (req, res, next) => {
    const { error } = usuarioSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};