/* let -> scope local
const -> usarlo mientras no necesite que el valor cambie
 var  -> no usar */

// let var1 = 'Hello World';
// const var2 = 'Hello World';

// let cadena = 'Hello World'; //string
// let numeros = 1; //number
// let booleano = true; //boolean
// let array = [1, 2, 3, 4, 5]; //Array
// let objeto = {
//     clave: 'valor'
// }

// let usuario = {
//     nombre: "Juan",
//     apellido: "Perez",
// };

// console.log(usuario.nombre);

// usuario.nombre = Nico;

// console.log(usuario.nombre);

/*
NaN         no es un número;
undefined   no está definido;
null        se define como nulo;
*/
/*
const usuario = {
    nombre: "Juan",
    apellido: "Perez",
};

const usuario2 = usuario;
console.table(usuario);
usuario.nombre = "Nico";
console.table(usuario2);
*/
/*
spread ... objeto.json
*/

// const objeto1 = {
//     clave: 'valor',
//     clave2: 'valor2',
//     clave3: {
//         clave4: 'valor4',
//     },
//     funcion: () => {

//     }
// };

// const objeto2 = {
//     ...objeto1,
//     clave2: 'valor4',
//     clave3: {...objeto1.clave3},
// };

// function suma (a,b) {
//     return a + b;   //Funcion pura
// }

//let array = [1,2,3,4,5];



// arrow function
/*
function nombreDeLaFuncion (a, b){
    return a + b;
}
const nombreDeLaFuncion = (a, b) => {
    resultado = a + b;
    return resultado;
}

const nombreDeLaFuncion = (a, b) => {
    return a + b;
}

const suma = (a, b) => {
    a + b;
}
*/
/*Revisar                               *IMPORTANTE*
array.map
array.forEach
array.filter
array.find
*/


/*
                            *EJEMPLO DE MAP PARA REACT* -> NETFLIX
const nombresUsuarios = usuarios.map((pelicula) => {
        return `
        <div>
        <h1>${pelicula}</h1>
        </div>
        `
    }
)
*/

/*
                            *EJEMPLO DE FILTER PARA REACT*

const usuarioMayoresDeEdad = usuarios.filter((usuario) => { return usuario.edad >= 18 });
*/

/*
            *EJEMPLO DE FIND PARA REACT* => encuentra al primero del listado que cumpla las condiciones

                            const usuarioDeterminado = usuarios.find((usuario) => { return usuario.id == 234234234234234});
*/
