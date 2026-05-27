let num_cuenta,estrato,tipo_servicio,kwh_consumido
do{
    num_cuenta=parseInt(prompt("ingrese un numero de 6 digitos:"))
}while(num_cuenta<0)
do{
    estrato=parseInt(prompt("estrato socioeconomico:"))
}while(estrato<0)
do{
    tipo_servicio=parseInt(prompt("TIPOS DE SERVICIO\n"+
    "1.redencial\n"+
    "2.comercial\n"+
    "3.industrial\n\n"+
    "SELECCIONE UNA OPCION(1/3):"))
}while(tipo_servicio!=1 && tipo_servicio!=3)
do{
    kwh_consumido=parseInt(prompt("cantidad de kilovatios consumidos:"))
}while(kwh_consumido<0)

if(kwh_consumido>=0 || kwh_consumido<=150){
    if(estrato==1 && tipo_servicio==1){
        let tarifa1=320.45 
        let pago_total=kwh_consumido*tarifa1
        let desc1=pago_total*0.30
        document.write("su numero de cuenta"+num_cuenta+" y debido a su consumo de kilvatios "+kwh_consumido+" y por ser estrato "+estrato+" el valor por kivatios es "+tarifa1+" y por usar el servio"+tipo_servicio+" tiene un subsidio con un descuento del 30%<br> pago total: "+(pago_total-desc1))
    }

}else if()

