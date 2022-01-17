function checkMayus(myform){
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(myfrom.mayus.value) == false){
        alert("No encuentro ninguna mayuscula");
        return false;
    }
    else{
        return true;
    }
}

function checkEspecial(myform){
    var regex = ;
    if(regex.test(myfrom.especial.value) == false){
        alert("Introduce un caracter especial porfavor");
        return false;
    }
    else{
        return true;
    }
}

function checkCorreo(myfrom){
    var regex = ;
    if(regex.test(myfrom.correo.value) == false){
        alert("Formato de correo inválido");
        return false;
    }
    else{
        return true;
    }
}

function checkTarjeta(myfrom){
    var regex =;
    if(regex.test(myfrom.tarjeta.value) == false){
        alert("Formato de tarjeta inválido");
        return false;
    }
    else{
        return true;
    }
}

function checkCorreo(myfrom){
    var regex = ;
    if(regex.test(myfrom.longitud.value) == false){
        alert("Formato de longitud inválido");
        return false;
    }
    else{
        return true;
    }
}

function checkNumero(myfrom){
    var regex = ;
    if(regex.test(myfrom.numero.value) == false){
        alert("Formato de numero inválido");
        return false;
    }
    else{
        return true;
    }
}
