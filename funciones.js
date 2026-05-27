//funciones
//funcion suma
let num1, num2;

function suma(){
    let num1, num2, suma;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    suma = num1+num2;
    document.write('El resultado de la suma es: '+suma);
}
//funcion resta
function resta(num1, num2){
    let resta;
    resta = num1 - num2;
    document.write('<br>');
    document.write('El resultado de la resta es: '+ resta);
}
//funcion multiplicacion
function mult(num1,num2){
    let result=num1*num2
    return result
}

suma();
num1 = parseInt(prompt('Numero 1'));
num2 = parseInt(prompt('Numero 2'));
resta(num1, num2);
document.write("<br> el resultado de la multiplicacion es: "  +(mult(num1,num2)))