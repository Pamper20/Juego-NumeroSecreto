
//let parrafo = document.querySelector('p');
//parrafo.innerHTML ='Ingresa un numero del 1 al 10';
let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo=3;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}   
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1)? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    /* prueba verificando en la consola
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto==numeroDeUsuario);
*/
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se Sortearon todos los numeros posibles');
   }else {
        // si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}    
function condicionesIniciales() {
    asignarTextoElemento('h1','JUEGO DEL NUMERO');
    asignarTextoElemento('p',`Escoje un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalod e numeros
    //Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();