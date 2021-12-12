var segundo = 0;
var minuto = 0;
var hora = 0;
var timer;

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
   timer = setInterval (atualizarTexto , 100)
}

function parar() {
    clearInterval(timer)
    timer.isOn = false

}

function limpar() {
    clearTimeout(timer)
}
