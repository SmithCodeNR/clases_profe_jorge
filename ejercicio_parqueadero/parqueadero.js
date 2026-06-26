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
    const Pago = document.getElementById("Pago")
    const botonPagar = document.getElementById("botonPagar")
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
    <p class = "pagoConDescuento"><strong>Pago con Descuento:</strong> ${descMultiplos(pagoDescuento(precio, desc))}</p>
    `
    Pago.innerHTML = `
    <input id="plataIngresada"  type="number" placeholder="INGRESE SU DINERO" required>
    `
    botonPagar.innerHTML =`
    <button id="confirmarPago"class="confirmarPago" type="click">Confirmar Pago</button>
    `
    //se va a añador el formulario de vueltas despues de dar clik en el boton confirmar pago
    const confirmarPago = document.getElementById("confirmarPago")
    confirmarPago.addEventListener("click", (e) =>{
        const plataIngresada = document.getElementById("plataIngresada").value
        const registro = document.getElementById("registro")
        const logoPagos = document.getElementById("logoPagos")
        const botonJson = document.getElementById("botonJson")
        logoPagos.innerHTML=`
        <h2>REGISTRO DE PAGO</h2>
        `
        registro.innerHTML = `
        <p><strong>Pago con descuento:</strong> ${descMultiplos(pagoDescuento(precio, desc))}</p>
        <p><strong>Dinero ingresado:</strong> ${plataIngresada}</p>
        <p><strong>Cambio a entregar:</strong> ${vueltas(descMultiplos(pagoDescuento(precio, desc)),plataIngresada)}</p>
        `
        botonJson.innerHTML =`
        <button id="archivoJson"class="confirmarPago" type="click">Generar JSON</button>
        `
        //aqio lo q se va hacer es guardar los datos en un json
        // Obtiene el botón con id "archivoJson" del HTML
        const archivoJson = document.getElementById("archivoJson");

        // Agrega un evento al botón para que ejecute este código cuando el usuario haga clic.
        // Se usa "async" porque dentro de la función utilizaremos "await".
        archivoJson.addEventListener("click", async () => {

            // Crea un objeto con toda la información que queremos guardar.
            // Cada propiedad corresponde a un dato del registro del parqueadero.
            const nuevoRegistro = {
                tipoVehiculo: tipoVehiculo,
                placa: placa,
                tiempo: tiempo(inicio, salida),
                pagoSinDescuento: multiplos(precio, pagoDescuento(precio, desc)),
                cambio: vueltas(descMultiplos(pagoDescuento(precio, desc)), plataIngresada)
            };

            // Intenta abrir un archivo JSON existente.
            try {

                // Abre el explorador de archivos para que el usuario seleccione
                // un archivo JSON ya existente.
                const [handle] = await window.showOpenFilePicker({

                    // Solo permite seleccionar un archivo.
                    multiple: false,

                    // Filtra los archivos para que solo se puedan escoger archivos .json
                    types: [{
                        description: "Archivo JSON",
                        accept: { "application/json": [".json"] }
                    }]
                });

                // Obtiene el archivo seleccionado.
                const file = await handle.getFile();

                // Lee todo el contenido del archivo como texto.
                const texto = await file.text();

                // Crea un arreglo vacío donde se almacenarán todos los registros.
                let registros = [];

                // Verifica que el archivo no esté vacío.
                if (texto.trim() !== "") {

                    // Convierte el texto JSON en un objeto de JavaScript.
                    const datosExistentes = JSON.parse(texto);

                    // Comprueba si el contenido ya es un arreglo.
                    if (Array.isArray(datosExistentes)) {

                        // Si ya es un arreglo, lo guarda directamente.
                        registros = datosExistentes;

                    } else {

                        // Si el archivo solo contiene un objeto,
                        // lo convierte en un arreglo con un solo elemento.
                        registros = [datosExistentes];
                    }
                }

                // Agrega el nuevo registro al final del arreglo.
                registros.push(nuevoRegistro);

                // Abre el archivo en modo escritura.
                const writable = await handle.createWritable();

                // Convierte nuevamente el arreglo a formato JSON
                // y lo escribe dentro del archivo.
                await writable.write(JSON.stringify(registros, null, 2));

                // Guarda definitivamente los cambios y cierra el archivo.
                await writable.close();

                // Muestra un mensaje indicando que todo salió correctamente.
                alert("Registro agregado al archivo JSON");

            } catch (error) {

                // Si el usuario no seleccionó un archivo existente
                // o ocurrió algún error al abrirlo,
                // se ejecutará este bloque.
                console.log("No se abrió un archivo existente, se creará uno nuevo");

                try {

                    // Abre una ventana para guardar un archivo nuevo.
                    const handle = await window.showSaveFilePicker({

                        // Nombre sugerido para el archivo.
                        suggestedName: "datos.json",

                        // Indica que será un archivo JSON.
                        types: [{
                            description: "Archivo JSON",
                            accept: { "application/json": [".json"] }
                        }]
                    });

                    // Abre el archivo recién creado para poder escribir en él.
                    const writable = await handle.createWritable();

                    // Guarda el primer registro dentro de un arreglo.
                    // Se usa [nuevoRegistro] porque queremos que el archivo
                    // tenga una lista de registros y no un único objeto.
                    await writable.write(JSON.stringify([nuevoRegistro], null, 2));

                    // Guarda y cierra el archivo.
                    await writable.close();

                } catch (e) {

                    // Si también falla la creación del archivo,
                    // muestra el error en la consola.
                    console.error("No se pudo guardar el archivo:", e);
                }
            }
        });
        //los style despues del segundo boton
        botonJson.style.textAlign = "center"
    })
    
    //estos son los style de los cajones q se agg desde el js
    pagos.style.textAlign = "center"
    Pago.style.textAlign = "center"
    botonPagar.style.textAlign = "center"
    
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
function multiplos(precio){
    const NOmultiplo = precio%50
    if(NOmultiplo<50 && NOmultiplo>0){
        const coeficiente = 50-NOmultiplo
        const totalMultiplo = precio + coeficiente
        return totalMultiplo
    }
    else if(NOmultiplo ==50 || NOmultiplo==0){
        return precio
    }
    else{
        return 0
    }
}
function descMultiplos(pagoDescuento){
    const multiplosDesc =pagoDescuento%50
     if (multiplosDesc<50 && multiplosDesc>0){
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
//vueltas de pago
function vueltas(descMultiplos, plataIngresada) { // recibe el total a pagar ya redondeado y el dinero que ingresa el usuario
    const numero = Number(plataIngresada) // convierte el valor de entrada a número para poder calcular
    let cambio = numero - descMultiplos // calcula el cambio que debe entregarse

    if (numero < 0) { // si el valor ingresado es negativo
        return `Falta ${Math.abs(cambio)} pesos` // indica cuánto falta
    }

    if (cambio == 0) { // si no hay diferencia entre lo pagado y lo que debe pagar
        return "No hay cambio" // no se necesita dar vueltas
    }

    const billetes = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50]// lista de denominaciones en orden descendente

    const resultado = [] // aquí se almacenará el desglose de billetes

    for (let i = 0; i < billetes.length; i++) { // recorre cada denominación
        const cantidad = Math.floor(cambio / billetes[i])// calcula cuántos billetes de esa denominación caben en el cambio

        if (cantidad > 0) { // solo guarda las denominaciones que se usan
            resultado.push(`${cantidad} de ${billetes[i]}`)// agrega el texto con la cantidad y el valor del billete
            cambio = cambio % billetes[i]// actualiza el cambio restante después de usar esa denominación
        }
    }

    return resultado.length > 0
        ? resultado.join(", ")// si hay alguna denominación usada, devuelve el desglose en una sola cadena
        : "No hay billetes para dar cambio"// si no, devuelve un mensaje indicando que no es posible dar cambio
}
