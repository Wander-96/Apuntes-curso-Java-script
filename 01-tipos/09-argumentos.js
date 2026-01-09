// Los valores que referenciamos dentro de las funciones se llaman parametros.
function suma (a, b) {
    console.log(arguments);
    return a + b;
}

// Los valores que pasamos pasamos a las funciones cuando las llamamos, se demominan argumentos. Ej debajo (5)
let resultado = suma (5, 6, 1 , 2 , 3);
console.log(resultado);
console.log(typeof suma);



// Las funciones pueden recibir multiples argumentos, y multiples parametros

// Para pasarle un nuevo argumento a la function, tengo que indicarle un nuevo parametro. Como se ve en function suma (a, b) {

// console.log(arguments); variable que se utiliza para acceder a todos los valores que se indican en la funcion. Forma no recomendada