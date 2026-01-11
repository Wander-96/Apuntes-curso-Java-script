/** 
 * Crear algoritmo que deuvelva el 
 * precio del producto mas impuesto
 */

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioCompleto(19.90, 0.15);
resultado = Number(resultado.toFixed(2));

console.log(resultado);