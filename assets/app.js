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
                alert("Numero correcto felicidaddes!!!");
                document.getElementById('historial').innerHTML = `Intentos: ${lista.join(', ')} (acierto)`;
                return;
            }else{
                alert("No es el numero correcto intente nuevamente (intentos: "+ (i)+ " de 3");
                document.getElementById('historial').innerHTML = `Intentos: ${lista.join(', ')}`;
            }
        }
    }
    if(i == 3){
        alert("Sin aciertos. El número era: " + secreto);
    }
}

function verificarNumero(numero){
    if(!Number.isInteger(numero)){
        alert("Numero ingresado no valido intente de nuevo");
        return false;
    }
    if (result<1 || result >10){
        alert("Numero ingresado fuera de los limites intente de nuevo");
        return false;
    }

    if(yaUsado(numero, lista)){
        alert("numero ya utilizado porfavor intente con otro numero");
        return false;
    }
    return true;
}
function yaUsado(numero, lista) {
  return lista.includes(numero);
}

adivinarNumero(generadorNumero());