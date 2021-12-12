var segundo = 0;
var minuto = 0;
var hora = 0;
var timer;

let h = document.getElementsByTagName("h1")[0]
h.innerHTML = hora + " : " + minuto + " : " + segundo;

function atualizarTexto() {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML = hora + " : " + minuto + " : " + segundo;
    if(segundo == 60){
        minuto++;
        segundo = 0 
    }if(minuto == 60){
        hora++;
        minuto = 0;
    }
    else{
        h.innerHTML = hora + " : " + minuto + " : " + segundo;
        segundo++;
    }
}

function iniciar() {
   timer = setInterval (atualizarTexto , 1000)
} 

function parar() {
    clearInterval(timer)
    timer.isOn = false

}

function limpar() {
    clearInterval(timer)
    timer.isOn = false
    segundo = 0;
    minuto = 0;
    hora = 0;
    timer;
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML = hora + " : " + minuto + " : " + segundo;
}
