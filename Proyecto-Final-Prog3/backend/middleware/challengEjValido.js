const Joi = require('joi');


const schema = Joi.object({
    challenge_id: Joi.number().required(),
    ejercicio_id: Joi.number().required(),
    posicion: Joi.number().required(),
    dia: Joi.date().required()


});

module.exports = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}