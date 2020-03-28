const { Joi, Segments } = require('celebrate');

const CreateIncidentSchema = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
};

const ListIncindetSchema = {
    [Segments.QUERY]: Joi.object({
        page: Joi.number(),
    }),
};

const DeleteIncidentSchema = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object({
        id: Joi.number().required(),
    }),
};

module.exports = { 
    CreateIncidentSchema, 
    ListIncindetSchema, 
    DeleteIncidentSchema
};