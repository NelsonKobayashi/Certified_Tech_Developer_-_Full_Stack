function mudarCor (obj, corTexto, corFundo) {
    obj.style.color = corTexto;
    obj.style.backgroundColor = corFundo;
}

document.getElementById('btn1').addEventListener('click', function (eventoBtn1){
    eventoBtn1.preventDefault();
});



var key_up = document.getElementById('field');
       
key_up.addEventListener("keyup", KeyPraCima);
    
/* function onKeyPress(event) {
    document.getElementById("status").innerHTML = event.key; 
    
} */
contador = 0;
document.getElementById("status").innerHTML = contador;
function KeyPraCima(event) {
    contador++;
    document.getElementById("status").innerHTML = key_up.value + ": " + contador; 
}