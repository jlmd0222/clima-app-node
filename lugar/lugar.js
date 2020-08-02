const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encoded = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz?locate=${encoded}&json=1&auth=688769923757308603090x6853`
            //headers: { 'X-Custom-Header': 'foobar' }
    });


    const resp = await instance.get()

    //console.log(resp.data, encoded);
    if (resp.data.matches === null) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const direccionn = resp.data.standard.city;
    const lat = resp.data.alt.loc.longt;
    const lng = resp.data.alt.loc.latt;

    return {
        direccionn,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}