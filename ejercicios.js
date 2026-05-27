//EJERCICIO1
// let unidad,cantidad,mi,km,mt
// unidad=parseInt(prompt("digite 1 para millas - 2 para kilometros - 3 para metros"))
// cantidad=(prompt("Digite el valor a convertir: "))
// switch(unidad){
//     case 1: 
//         km=cantidad*1.6093
//         mt=cantidad*1609.34
//         document.write(cantidad +"millas, equivalen a " + km +"kilometros; "+ mt + "metros")
//         break
//     case 2:
//         mi=  cantidad*0.621371
//         mt= cantidad*1000
//         document.write(cantidad + "kilometros, equivalen a"+ mi + "millas;" + mt + "metros")
//         break
//     case 3:
//         mi=cantidad*0.000621371
//         km=cantidad/ 1000
//         document.write(cantidad + " metros, equivalen a" + mi + "millas;" * km + "kilometros")
//         break
//     default:
//         document.write("valores INCORRECTOS.")

// }
// // //EJERCICIO2
/*let d1,d2,d3,d4,d5,d6,num,coc
num=parseInt(prompt("ingrese un numero de 6 cifras: "))
d6=num%10
coc=Math.trunc(num/10)
d5=coc%10
coc=Math.trunc(coc/10)
d4=coc%10
coc=Math.trunc(coc/10)
d3=coc%10
coc=Math.trunc(coc/10)
d2=coc%10
coc=Math.trunc(coc/10)
d1=coc%10
coc=Math.trunc(coc/10)
document.write("la suma es: " + (d4+d3))
document.write("\nla multiplicacion es " + (d1*d6))
document.write("\nla resta es:" + (d2-d5))*/

//ejercicio 3 
/*let hora= parseInt(prompt("ingrese una hora (0/23):"))// primero creamos una variable con el let despues usamos el parseInt para lo q le digamos a la consola lo convierta a texto el prompt es como el input de python
let minutos= parseInt(prompt("ingrese un minuto (0/59):"))
let segundos= parseInt(prompt("ingrese un segundo (0/59):"))
segundos++//a la variable segundos se le coloca el ++ para poder aumentar numero tras otro
if(segundos === 60) {//los segundos deben ser estrictamente igual a 60 para q cuando se cumpla la condicional 
    segundos = 0//esto es para dar a entender q la Variable empieza en 0
    minutos++//esto se hace para q si se cumple la condicional le aumente un valor mas
}
if(minutos === 60) {
    minutos = 0
    hora++
}
if(hora === 24) {
    hora = 0
}
hora = String(hora).padStart(2, "0")//la variable horra la pasamos a texto con el string para poder usar el padstart el 2 lo q hace es dar a entender q siempre tenemos q tener 2 caracteres y el "0"es para q se complete el espacio en caso de q el resultado solo sea 1 caracter
minutos = String(minutos).padStart(2, "0")
segundos = String(segundos).padStart(2, "0")
document.write(hora + ":" + minutos + ":" + segundos)//el document.write es cpmp el print de python donde colocamos las variables mas el ":"para q visuaalmente se vea separadas las variable*/
//ejercicio 4
/*let a = parseInt(prompt("ingrese un numero + o - : "))
let b = parseInt(prompt("ingrese un numero + o - : "))
let c = parseInt(prompt("ingrese un numero + o - : "))
let discriminante = ((b) ** 2 - (4 * a * c))
console.log(discriminante)
if (discriminante === 0) {
    let cero = (-b)/(2*a)
    document.write("solo existe una solucion real, que es " + cero)
}else if(discriminante>0) {
    let solucion_1 = (-b + Math.sqrt(discriminante))/(2 * a)//el (Math.sqrt)es la funcion para calcular la raiz cuadrada
    let solucion_2 = (-b - Math.sqrt(discriminante))/(2 * a)
    document.write("hay dos soluciones reales: la solucion 1 es " + solucion_1 +  " y la solucion 2 es " + solucion_2)
}else{
    document.write("existen dos soluciones imaginarias.")
    let real = (-b /(2 * a))
    let imaginaria = (Math.sqrt(- discriminante)/ (2 * a))
    document.write("solucion 1: " + real + "+" + imaginaria + "i" + " y la solucion 2: " + real + "-" + imaginaria + "i")//en este caso la "i" significa q es un numero imaginario 
}*/
//ejercicio5
// let pos=0,neg=0,cero=0,tem
// while(true){
//     tem=(prompt("ingrese una temperatura:"))
//     if (tem ==99 && tem ==99){
//         break
//     }else if(tem>0){
//         pos++
//     }else if(tem<0){
//         neg++
//     }else{
//         cero++
//     }
//     tem=(prompt("ingrese una temperatura:"))
// }
// document.write("temperaturas mayores a 0: "+ pos+"<br>")
// document.write("temperaturas iguales a 0: "+ cero+"<br>")
// document.write("temperaturas menores a 0: "+ neg)
//ejercicio6
/*let radar,d1,d2,d3,d4,res
radar=parseInt(prompt("ingrese 4 numeros: "))
d4=radar%10
res=Math.trunc(radar/10)
d3=res%10
res=Math.trunc(res/10)
d2=res%10
res=Math.trunc(res/10)
d1=res%10
res=Math.trunc(res/10)
if(d1%2 !='0'){
    document.write("No hay ninguna nave en el aire, se aproxima ") 
}else if (d1+=2){
    document.write("hay una nave en el aire,  se aproxima ")
}
switch(d2){
case 0:document.write("dirigible ");break
case 1:document.write(" militar ");break
case 2:document.write("avión civil de carga ");break
case 3:document.write("avión civil de pasajeros ");break
case 4:document.write("nave sin permiso ");break
case 5:document.write("nave de supertransporte ");break
case 6:document.write("nave enemiga ");break
case 7:document.write("avión mixto ");break
case 8:document.write("helicóptero ");break
case 9:document.write("globo aerostático ");break
}
document.write(" en una distancia de:  "+ d3 + " km ")
if(d4==0 || d4==1){
    document.write("al norte")
}else if(d4==2 ||d4==3){
    document.write("al sur"
}else if(d4==4||d4==5){
    document.write("al oriente")
}else if(d4==6 ||d4==7){
    document.write("al occidente")
}else if(d4==8 ||d4==9){
    document.write("desconocido")
}else{
    document.write("su valor no conside.")    
}*/
//ejercicio 7
/*let can1, can2, can3, can_total,precio_total
let frec,dia
let A=600,AA=700,AAA=750

do{
    can1=parseInt(prompt("cantidad de huevos tipo A:"))
}while(can1<0)
do{
    can2=parseInt(prompt("cantidad de huevos tipo AA:"))
}while(can2<0)
do{
    can3=parseInt(prompt("cantidad de huevos tipo AAA:"))
}while(can3<0)
do{
    frec=parseInt(prompt("si es cliente frecuente digite 1, si no 0"))
}while(frec!=1 && frec!=0)
do{
    dia=parseInt(prompt("digite 1 si compro entre semana L-V,2 si compro el sabado, 3 si compro el domingo"))
}while(dia<1 || dia>3)
can_total=can1+can2+can3
precio_total=(can1*A)+(can2*AA)+(can3*AAA)
if(can_total>=30 && can_total<=45){
    if(frec==1 && dia==1){
        let aum=precio_total*0.05
        let desc1=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
    }else if(frec==1 && dia==2){
        let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
    }else if(frec==1 && dia==3){
        let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
    }
    else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
        let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
        let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }

    
}else if(can_total>=46 && can_total<=70){
    if(frec==1 && dia==1){
        let aum=precio_total*0.05
        let desc1=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
    }else if(frec==1 && dia==2){
        let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
    }else if(frec==1 && dia==3){
        let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
    }
    else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
        let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
        let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }
}else if(can_total>=71 && can_total<=100){
    if(frec==1 && dia==1){
        let aum=precio_total*0.05
        let desc1=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
    }else if(frec==1 && dia==2){
        let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
    }else if(frec==1 && dia==3){
        let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
    }
    else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
        let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
        let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }
}else if(can_total>100){
    if(frec==1 && dia==1){
        let aum=precio_total*0.05
        let desc1=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
    }else if(frec==1 && dia==2){
        let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
    }else if(frec==1 && dia==3){
        let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
    }
    else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
        let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
        let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }
}else {
    if(frec==1 && dia==1){
        let aum=precio_total*0.05
        let desc1=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
    }else if(frec==1 && dia==2){
        let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
    }else if(frec==1 && dia==3){
        let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
    }
    else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
        let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
        let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }
}*/
//ejercicio8
