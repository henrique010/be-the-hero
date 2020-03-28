const { Joi, Segments } = require('celebrate');

const CreateOngSchema = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().min(2).max(2),
    })
};

const OngProfileSchema = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}

module.exports = { CreateOngSchema, OngProfileSchema };