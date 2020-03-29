const express = require('express');
const { celebrate } = require('celebrate');

//importação dos controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const AdressController = require('./controllers/AddressController');

//importação dos esquemas de validação
const AddressSchemaValidator = require('./validators/schemas/AddressSchemaValidator');
const CreateSessionSchema = require('./validators/schemas/SessionSchemaValidator');
const { CreateOngSchema, OngProfileSchema } = require('./validators/schemas/OngSchemaValidator');
const { 
    CreateIncidentSchema, 
    ListIncindetSchema, 
    DeleteIncidentSchema } = require('./validators/schemas/IncidentSchemaValidator');

const routes = express.Router();

routes.post('/sessions', celebrate(CreateSessionSchema), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate(CreateOngSchema), OngController.create);
routes.get('/profile', celebrate(OngProfileSchema), ProfileController.index);

routes.post('/incidents', celebrate(CreateIncidentSchema), IncidentController.create);
routes.get('/incidents', celebrate(ListIncindetSchema), IncidentController.index);
routes.delete('/incidents/:id', celebrate(DeleteIncidentSchema), IncidentController.delete);

routes.get('/address', celebrate(AddressSchemaValidator), AdressController.show);

module.exports = routes;