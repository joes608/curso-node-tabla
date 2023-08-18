const argv =require('./config/yargs');

// imprimir la tabla del 5 en consola

const { crearArchivo } = require('./helpers/multiplicar')


console.clear();


// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.tabla);





// const[ , , arg3='tabla=5'] = process.argv;
// const [ , tabla] =arg3.split('=');
// console.log(tabla);

// const tabla = 1;


crearArchivo(argv.b, argv.l) //si no se va a colocar promesas se debe colocar ?.tabla paqre que no salga error
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
