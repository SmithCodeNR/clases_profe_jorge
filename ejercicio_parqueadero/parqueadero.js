//vamos a llamar datos 
const calcular = document.getElementById("calcular")
calcular.addEventListener("click", (e) =>{
    const tipoVehiculo = document.getElementById("tipoVehiculo").value
    const placa = document.getElementById("placa").value
    const inicio = document.getElementById("inicio").value
    const salida = document.getElementById("salida").value
    const usuario = document.getElementById("usuario")
    const logo = document.getElementById("logo")
    const pagos = document.getElementById("pagos")
    const precio = valor(tipoVehiculo, tiempo(inicio, salida))
    const desc = restriccion(inicio, placa, precio)
    //vamos a mostrar los datos en el html
    logo.innerHTML=`
    <h2>DATOS REGISTRADOS</H2> 
    `
    usuario.innerHTML= `
    <p><strong>Tipo de vehiculo:</strong> ${tipoVehiculo}</p>
    <p><strong>Placa del vehiculo:</strong> ${placa}</p>
    <p><strong>Fecha de entrada:</strong> ${inicio}</p>
    <p><strong>Fecha de salida:</strong> ${salida}</p>
    
    `
    pagos.innerHTML = `
    <p class= "pagoSinDescuento"><strong>Pago sin descuento:</strong> ${multiplos(precio, pagoDescuento(precio,desc))}</p>
    <p><strong>descuento del 25%:</strong> ${restriccion(inicio, placa,valor(tipoVehiculo,tiempo(inicio,salida)))}</p>
    <p class = "pagoConDescuento"><strong>Pago con Descuento:</strong> ${pagoDescuento(precio, desc)}</p>
    <input id="plata"  type="number" placeholder="INGRESE SU DINERO" required>
    `
    pagos.style.textAlign = "center"



    console.log(restriccion(inicio, placa,valor(tipoVehiculo,tiempo(inicio,salida))))
    validacion(placa, tipoVehiculo)
    console.log(tiempo(inicio, salida))
    console.log(valor(tipoVehiculo, tiempo(inicio, salida)))
    console.log(multiplos(precio,pagoDescuento(precio, desc)))
    console.log(pagoDescuento(precio, desc))
})


//aqui lo va a calcular el tiempo en minutos
function tiempo(inicio, salida){
    const minutos =(Date.parse(salida) - Date.parse(inicio))/(1000*60)
    return minutos
}
//ahora vamos a multiplacar los minutos con el tipo de vehiculo 
function valor(tipoVehiculo, tiempo){
    if(tipoVehiculo=="auto"){
        const precio =tiempo*125
        return precio
    }
    else if (tipoVehiculo=="moto"){
        const precio = tiempo*95
        return precio
    }

}
//ahora vamos hacer q se cumplan los parametros de la placa 
const patron = /^[A-Za-z]{3}[0-9]{3}$/
const patron2 = /^[A-Za-z]{3}[0-9]{2}[A-Za-z]{1}$/
function validacion(placa, tipoVehiculo){
    if (!patron.test(placa) && tipoVehiculo=="auto") {
        alert("Debe ingresar 3 letras y 3 números. \nEjemplo: ABC123")
        return 
    }
    else if (!patron2.test(placa) && tipoVehiculo == "moto"){
        alert("Debe ingresar 3 letras, 2 numeros y 1 letra.\nEjemplo: ABC12G")
        return
    }
}
//pico y placa
function restriccion(inicio, placa,precio){
    const fecha = new Date(inicio)
    const digito = placa.split("")
    const picoPlacaPar =[6,7,8,9,0]
    const picoPlacaImpares = [1,2,3,4,5]
    if (fecha.getDate() % 2 == 0 && picoPlacaPar.includes(parseInt(digito[5]))){
        const descuento = precio * 0.25
        return descuento
    }
    else if (fecha.getDate() % 2 !==0 && picoPlacaImpares.includes(parseInt(digito[5]))){
        const descuento = precio *0.25
        return descuento
    }
    else{
        return 0
    }
}
//pago con descuento del pico y placa 
function pagoDescuento(precio,desc){
    const descuentoPago = precio - desc
    return descuentoPago
}
//multiplos de 50
function multiplos(precio,pagoDescuento){
    const NOmultiplo = precio%50
    const multiplosDesc =pagoDescuento%50
    if(NOmultiplo<50 && NOmultiplo>0){
        const coeficiente = 50-NOmultiplo
        const totalMultiplo = precio + coeficiente
        return totalMultiplo
    }
    else if(NOmultiplo ==50 || NOmultiplo==0){
        return precio
    }
    else if (multiplosDesc<50 && multiplosDesc>0){
        const coeficiente = 50-multiplosDesc
        const totalMDesc = pagoDescuento + coeficiente
        return totalMDesc
    }
    else if (multiplosDesc==50 || multiplosDesc==0){
        return pagoDescuento
    }
    else{
        return 0
    }
    
}
