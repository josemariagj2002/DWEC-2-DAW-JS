/*1. Realiza una p gina que cree un objeto de tipo Date y muestre en la 
p gina la siguiente informaci n (cada una en una l nea):
• El a o actual
• El mes actual
• El d a actual 
• La hora actual
• Los minutos actuales
• Los segundos actuales*/

const fecha = new Date();

console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getMinutes());
console.log(fecha.getFullYegetSecondsar());

/*2. Crea una p gina web en la que se muestre el resultado de cada uno de
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes*/

let fechaHoy = new Date();
let fecha85 = fechaHoy.setDate(fechaHoy.getDate() + 85);
let fecha187 = fechaHoy.setDate(fechaHoy.getDate() + 187);
fecha85.setFullYear(fecha85.getFullYear()+2);
fecha187.setHours(fecha187.getHours()-24);


/*3. Utilizando setTimeout() creo un contador hac a atr s de 60 segundos. í á*/

function temporizador(){
    alert('Han pasado 60 segundos')
}
setTimeout (temporizador, 60000);

/*4. Utilizando el programa anterior haz que al llegar a 0 se cargue la p gina á
de google, para ello puedes utilizar el objeto location.*/

function cambio(){
    window.location.href = "https://www.google.es/"
}
setTimeout (cambio, 60000);

/*5. Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y é
el m todo setTimeout() crea un reloj que se actualice cada segundo. */

function mostr_relj(){
    tiempo = new Date();
    document.write(`${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}<br/>`);
    setTimeout(mostr_relj, 1000);
}

mostr_relj()