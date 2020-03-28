const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('INCIDENT', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to new incident for the ONG', async () => {
        const id = generateUniqueId();
        await connection('ongs')
        .insert({
            id,
            name: "ONG TESTE",
            email: "teste@gmail.com",
            whatsapp: "88998989796",
            city: "Crateús",
            uf: "CE"
        });

        const response = await request(app)
        .post('/incidents')
        .set('Authorization', id)
        .send({
            title: "Caso teste",
            description: "Descrição",
            value: 50
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
    });
    
    it('Should be able to exclude ONG incident', async () => {
        const ong_id = generateUniqueId();
        await connection('ongs')
        .insert({
            id: ong_id,
            name: "ONG TESTE",
            email: "teste@gmail.com",
            whatsapp: "88998989796",
            city: "Crateús",
            uf: "CE"
        });

        const [incident_id] = await connection('incidents').insert({
            title: "Caso teste",
            description: "Descrição",
            value: 50,
            ong_id,
        });

        const response = await request(app)
        .delete(`/incidents/${incident_id}`)
        .set('Authorization', ong_id);

        expect(response.status).toBe(204);
    });
})