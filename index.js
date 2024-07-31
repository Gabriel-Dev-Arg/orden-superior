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


    let encontrarEdad = personas.map (personas => personas.edad)

    console.log(encontrarEdad)



//ejercicio 4
    const numeros1 = [1, 2, 3];
    const letras = ['a', 'b', 'c'];
    
    let combinaciones = numeros1.map((numero, index) => {
    return `${numero}${letras[index]}`;
    });
    
    console.log(combinaciones); // ['1a', '2b', '3c']
    



//ejercicio 5

const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
];

let cambioDeDatos = productos.map((producto, indice) => {
    // Crear un nuevo objeto producto con el precio modificado
    return {
        nombre: producto.nombre,
        precio: producto.precio + (indice + 10) // Incrementa el precio en función del índice
    };
});

console.log(cambioDeDatos);



//ejercicio 6 
let nombres = ['Ana', 'Carlos', 'David', 'Elena', 'Beto']

// Filtrar nombres que contienen la letra "a"
let nombresConA = nombres.filter(nombre => nombre.toLowerCase().includes('a'));
//Metodo Sort automaticamente ordena
let alfaveticamente = nombresConA.sort()
console.log(alfaveticamente)


let libros = [
    { titulo: 'Harry Potter', paginas: 400 },
    { titulo: 'El Hobbit', paginas: 300 },
    { titulo: 'Cien años de soledad', paginas: 500 }
];

let librosConMasDe300Paginas = libros.filter(libro => libro.paginas > 300);
librosConMasDe300Paginas.sort((a, b) => b.paginas - a.paginas);
console.log(librosConMasDe300Paginas)











