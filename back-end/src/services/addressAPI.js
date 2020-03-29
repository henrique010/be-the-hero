const axios = require('axios').default;

const addressAPI = axios.create({
    baseURL: 'https://viacep.com.br/ws',
})

module.exports = addressAPI;