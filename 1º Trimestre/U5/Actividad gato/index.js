//

function inicia(){
    document.getElementById("gato").addEventListener('click',mostrar_mensaje);
    document.getElementById("gato2").addEventListener('click',mostrar_mensaje2);

};

window.addEventListener('load',inicia);

var contador = 0;
var contador2 = 0;

function mostrar_mensaje(){
    contador += 1;
    document.getElementById("mensaje").innerHTML = 'n1 de clicks : ' + contador;
}

function mostrar_mensaje(){
    contador2 += 1;
    document.getElementById("mensaje2").innerHTML = 'n1 de clicks : ' + contador2;
}


/*window.onload = ()=>{
    let imagen = document.getElementById("gatitu.png");
    imagen.addEventListener("clic",clicaGato);
    imagen.conatdorClics = 0;
}*/