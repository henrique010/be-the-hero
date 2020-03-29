const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    it('Should be able to create new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "ONG TESTE",
            email: "teste@gmail.com",
            whatsapp: "88998989796",
            city: "Crateús",
            uf: "CE"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('Should be able seek incidents of the ONG', async () => {
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
        .get('/profile')
        .set('Authorization', id);

        expect(response.status).toBe(200);
    })
});