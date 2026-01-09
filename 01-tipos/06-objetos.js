// Tipo de dato de referencia
// Agrupacion de datos que tiene sentidos tenerlos juntos
// Ej: persona (nombre,apellido,edad, nacionalidad, etc.)

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

// let personaje = {} objeto literal
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

// Si conozco el nombre de la propiedad a iterar
personaje.edad = 13;
// Si no conozco el nombre de la propiedad a iterar
personaje['edad'] = 16;

    // nombre (llave): "Tanjiro"(valor), -  en cojunto son propiedad

// Para eliminar un propiedad:
delete personaje.anime;
console.log(personaje);

// Los objetos no respetan el orden en que escribimos los elementos