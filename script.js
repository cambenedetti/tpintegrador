const cantidadEntradas = document.getElementById('cantidadEntradas')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const totalCompra = document.getElementById('totalCompra')

function resumen(){

if(categoria.value == "estudiante"){
    var valorDescuento = 200 / 100 * 20  
    var valorTotal = valorDescuento * Number(cantidadEntradas.value)  
}
if(categoria.value == "trainee"){
    var valorDescuento = 200 / 100 * 50  
    var valorTotal = valorDescuento * Number(cantidadEntradas.value)  
}
if(categoria.value == "junior"){
    var valorDescuento = 200 / 100 * 85  
    var valorTotal = valorDescuento * Number(cantidadEntradas.value)  
}
    totalCompra.innerHTML = "$" + valorTotal
}