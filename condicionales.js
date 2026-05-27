// // // // let nombre, edad;
// // // // nombre = prompt("Ingrese su nombre ...");
// // // // edad = prompt('Ingrese su edad');
// // // // if (edad >= 18) {
// // // //     document.write('BIENVENIDO ', nombre); 
// // // // } else {
// // // //     if (edad < 18) {
// // // //          document.write(nombre, ' es menor de edad');
// // // //     }
// // // //     else {
// // // //          document.write('NO HA INGRESADO DATOS');
// // // //     }
// // // // }
// // // //dado de un numero entre 1y 5, determine el dia laboral q  le corresponde 
// // // let dia;
// // // dia = prompt("ingrese un numero entre 1 y 5: ");
// // // if(dia=="1"){
// // //     document.write("lunes");
// // // } else if (dia=="2"){
// // //     document.write("martes");
// // // } else if (dia=="3"){
// // //     document.write("miercoles");
// // // } else if (dia=="4"){
// // //     document.write("jueves");
// // // } else if (dia=="5"){
// // //     document.write("viernes");
// // // } else{
// // //     document.write("ingreso un numero fuera de lo indicado ");
// // // }
// // //utilizando switch
 let dia;
 dia= parseInt(prompt("ingrese un numero entre 1 y 5: "));
 switch(dia){
     case 1: document.write("lunes");break;
     case 2: document.write("martes");break;
    case 3: document.write("miercoles");break;
    case 4: document.write("jueves");break;
    case 5: document.write("viernes");break;
    default: document.write("ingreso un numero incorrecto ");break;
}
// //condicionales con el operador logico &&
// let nota_practica, nota_teorica, nota_definitiva
// nota_practica = parseFloat(prompt("ingrese la nota practica:"))
// nota_teorica = parseFloat(prompt("ingrese la nota teorica:"))
// if (nota_practica>=4 && nota_teorica>=4){
//     nota_definitiva = nota_teorica*0.65 + nota_practica*0.35
// }else{
//     nota_definitiva=0
// }document.write("su nota definitiva: "+ nota_definitiva)
//comision por venta de autos
/*let ventas, cantidad, comision
ventas = (prompt("ingrese el valor en ventas:"))
cantidad = (prompt("ingrese la cantidad de autos:"))
if(ventas>500||cantidad>10){
    comision = ventas*0.25
}else{
    comision=0
}
document.write("su comision es: $"+ comision)*/
