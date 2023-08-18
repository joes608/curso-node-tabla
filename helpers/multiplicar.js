
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const crearArchivo = (tabla = 5, listar = false) => {
const colors = require('colors');
    return new Promise((resolve, rejects) => {

        

        let salida = '';

        for (i = 1; i <= 10; i++) {
            salida += `${tabla} x ${i} = ${tabla * i}\n`;
        }

        if (listar) {

            console.log(colors.green('       ================================================'));
            console.log(colors.red("       ****************==============**************"))
            console.log(colors.rainbow('               Te presentamos la tabla del', tabla));
            console.log("       ================================================");

            console.log(colors.rainbow(salida));

        }


        // fs.writeFileSync(`tabla-${tabla}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`Tabla del ${tabla} ha sido creada`);
        // })

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida)
        resolve(`El archivo con el nombre de:  tabla-${tabla}.txt ha sido  creado`);


    })


}


module.exports = {
    crearArchivo
}