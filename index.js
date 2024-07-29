//Ejercicio 1

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map(numero => numero * 2);

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]


//creamos el arreglo
const num = [25,35,45,55,65]

//utilizamos el metodo .map , para crear otro arreglo y modificarlo , este no cambia el arreglo original .
let multiplicarNum = num.map(num => num + 100);
//

console.log(multiplicarNum);


//Ejercicio 2

const palabras = ['hola', 'mundo', 'javascript'];

let pasarAMayuscula = palabras.map(palabras => palabras.toUpperCase()

)
console.log(pasarAMayuscula)

//Ejercicio 3

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
    ];

    

