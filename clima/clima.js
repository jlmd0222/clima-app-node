const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e1aa4681ca1b35a000a3cdfa0fc7ead1&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}