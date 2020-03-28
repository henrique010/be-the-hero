const { Joi, Segments } = require('celebrate');

const CreateSessionSchema = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}

module.exports = CreateSessionSchema;


