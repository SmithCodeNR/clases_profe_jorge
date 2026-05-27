//repaso de ejercicios 3 y 4
/*let caso1, caso2,caso3,caso4
caso1 ="13:19:25"
caso2 = "13:19:59"
caso3 ="13:59:59"
caso4 = "23:59:59"
let hora,min,seg
const tiempo = caso4.split(":")
console.log(tiempo)
hora= (tiempo[0])
min= (tiempo[1])
seg= (tiempo[2])
if (hora==23 && min==59 && seg==59){
    hora=0; min=0; seg=0
}else if(min==59 && seg==59){
    hora++; min=0; seg=0
}else if(seg==59){
    min++; seg=0
}else {
    seg++
}
console.log(hora+":"+min+":"+seg)*/
//ejercicio 4
let a,b,c,x1,x2,disc
a = parseFloat(prompt("ingrese un valor a:"))
 b = parseFloat(prompt("ingrese un valor b:"))
 c = parseFloat(prompt("ingrese un valor c:"))
 disc = (b*b-(4*a*c))
 if(disc==0){
    document.write("solo existe una solucion")
    x1= (-b + Math.sqrt(disc))/2*a
    document.write("solucion 1 :"+x1)
 }else if(disc>0){
    x1= (-b + Math.sqrt(disc))/2*a
    x2= (-b - Math.sqrt(disc))/2*a
    document.write("solucion 1 :"+x1)
    document.write("<br>")
    document.write(" solucion 2 :"+x2)
 }else{

 }