const addressAPI = require('../services/addressAPI');

module.exports = {
    async show (request, response){
        const { cep } = request.query;
        
        const addressResponse = await addressAPI.get(`/${cep}/json`);

        if(addressResponse.data.erro){
            return response.status(404).json({ error: 'Cep not found.'});
        }

        const { localidade: city, uf } = addressResponse.data;

        return response.json({ city, uf });   
    }
}