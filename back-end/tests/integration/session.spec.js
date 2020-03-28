const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connection');

const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('SESSION', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able return ONG name for authentication success', async () => {
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
        .post('/sessions')
        .send({
            id,
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
    })
})