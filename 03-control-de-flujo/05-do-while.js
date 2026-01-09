// do-while evalua la condicion al final del loop 


//En while se evalua primero la condicion, y si se cumple se ejecuta el codigo
let i = 2;
while (i < 2) {
    if (i % 2 == 0) {
        console.log('numero par', i);
    }
    i++;
}

//Do while ejecuta la porcion de codigo y despues evalua la condicion, y si se cumple, vuelve a arriba y lo reejecuta

// do {
//     if (i % 2 == 0) {
//         console.log('numero par', i);
//     }
//     i++;
// } while (i <2);