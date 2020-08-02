const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* 
clima.getClima(4.60769, -74.11439)
    .then(console.log)
    .catch(console.log); */


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }


    //el clima de xxxxx es de xx
    //no se pudo deerminar el clima de xxxx
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);