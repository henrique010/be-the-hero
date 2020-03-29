const { Joi, Segments } = require('celebrate');

const AdressSchemaValidator = {
    [Segments.QUERY]: Joi.object({
        cep: Joi.string().required().min(8).max(8),
    }),
};

module.exports = AdressSchemaValidator;