// Sirve para iterar las propiedades de un objeto

let user = {
    id: 1,
    name: 'Paco',
    age: 30
}

for (let prop in user) {
    console.log(user['name']);
}

let animales = ['chanchito','caballo', 'dragon'];
for (let indice in animales) {
    console.log(animales, indice[indice]);
}

// Para acceder a los elementos de un array no utilizar for in. Utilizar for of