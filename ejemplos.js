/*  alert('funciones')  */

/* var saludo = prompt('Dinos tu nombre');
   
        console.log('Hola ' + saludo + ' saludos desde Javascript');
    */

    var num1 = parseInt( prompt('Coloca un numero'));
    var num2 = parseInt( prompt('Coloca otro numero'));
    /* var resultado1 = (num1+num2); 
    var resultado2 = (num1*num2);
    var resultado3 = (num1-num2);
    var resultado4 = (num1/num2); */
// dentro de function las variables pueden ser distintas 
function suma(operacion1,operacion2){
    var resultado = num1 + num2;
    console.log(resultado);
}
//llamar función
suma(num1,num2);

function resta(num1,num2){
    var resultado = num1 - num2;
    console.log(resultado);
}
resta(num1,num2);

function division (num1,num2){
    var resultado = num1 / num2;
    console.log(resultado);
}
division(num1,num2);

function multiplicacion (num1,num2){
    var resultado = num1 * num2;
    console.log(resultado);
}
multiplicacion (num1,num2);


    
/*     if(resultado1) {
        console.log ('Tu suma es:'+ resultado1);
    } 
    else if(resultado2) {
        console.log ('Tu suma es:'* resultado2);
    } 
    else if(resultado3) {
        console.log ('Tu suma es:'- resultado3);
    } 
    else if(resultado4) {
        console.log ('Tu suma es:'/ resultado3);
    }  */