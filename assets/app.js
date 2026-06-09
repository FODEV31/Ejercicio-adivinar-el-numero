let result = 0;
let lista = [];
function generadorNumero(){
    return Math.floor(Math.random() * 10) + 1;
    
}

function adivinarNumero(secreto){
    console.log("Numero secreto es: "+ secreto);
    let i = 0;
    while (i<3){
        result =parseInt(prompt("Ingrese un numero"));
        if(verificarNumero(result)){
            lista.push(result);
            i++
            if(result == secreto){
                console.log("Numero correcto felicidaddes!!!");
                break;
            }else{
                console.log("No es el numero correcto intente nuevamente (intentos: "+ (i)+ " de 3");
            }
        }
    }
}

function verificarNumero(numero){
    if(!Number.isInteger(numero)){
        console.log("Numero ingresado no valido intente de nuevo");
        return false;
    }
    if (result<1 || result >10){
        console.log("Numero ingresado fuera de los limites intente de nuevo");
        return false;
    }

    if(yaUsado(numero, lista)){
        console.log("numero ya utilizado porfavor intente con otro numero");
        return false;
    }
    return true;
}
function yaUsado(numero, lista) {
  return lista.includes(numero);
}

adivinarNumero(generadorNumero());