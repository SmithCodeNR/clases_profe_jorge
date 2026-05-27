let, num, uni,dec,cent,coc;
num=prompt("digite un numero de 3 cifras") 
 coc= Math.trunc(num / 10);
 uni=num % 10;
 cent= Math.trunc(num / 10);
 dec=coc % 10;
console.log('unidades:'+ uni);
console.log('decenas:'+ dec);
console.long('centenasas:'+ cent);
//Uso de variables
/*var nombre = 'CESDE';
console.log(nombre);
console.log(typeof(nombre));

var edad = 52;
console.log(edad);
console.log(typeof(edad));

edad = 'Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1300000.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var salon;
console.log(salon);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);*/

/*let persona = {nombre: 'JORGE', edad: 56};
document.write(persona.nombre);
document.write('<br>');
document.write(persona.edad);

//  * Operadores matemáticos +, -, *, /
 var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2026;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);

/**
 * Operadores Lógicos, unarios y de asignación
 */
//Lógicos < > <= >= ==
/*var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
edadAna++;
console.log(edadAna++);
console.log(edadAna);

// //Asignación, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);

//Ternario
let edad=22;
let puedeVotar = (edad>=18) ? "Puede VOTAR" : "NO puede VOTAR";
alert (puedeVotar);*/