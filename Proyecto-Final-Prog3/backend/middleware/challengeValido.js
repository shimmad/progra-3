const Joi = require('joi');

const ChallengeSchema = Joi.object({
    nombre: Joi.string().required(),
    descripcion: Joi.string().required(),
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().required()
});

module.exports = (req, res, next) => {
    const { error } = ChallengeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};