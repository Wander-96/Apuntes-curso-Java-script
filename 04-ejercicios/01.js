function cualEsMayor(a, b) {
    return (a>b) ? a : b;
}   

let mayor = cualEsMayor(10, 5);


if (mayor) {
    console.log("El número mayor es", mayor);
}