const Joi = require('joi');

const SeguimientoSchema = Joi.object({
    usuario_id: Joi.number().required(),
    challenge_id: Joi.number().required(),
    dia: Joi.date().required(),
    completado: Joi.boolean().required()
});

module.exports = (req, res, next) => {
    const { error } = SeguimientoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();


}