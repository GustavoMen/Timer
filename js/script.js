var segundo = 0;
var minuto = 0;
var hora = 0;
var timer;


function atualizarTexto() {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML = minuto + " : " + segundo;
    if(segundo > 59){
        minuto++;
        segundo = 0 
    }else{ 
    h.innerHTML = minuto + " : " + segundo;
    segundo++
    }
}

function iniciar() {
   timer = setInterval (atualizarTexto , 100)
}

function parar() {
    clearInterval(timer)
}

function limpar() {
    clearTimeout(timer)
}