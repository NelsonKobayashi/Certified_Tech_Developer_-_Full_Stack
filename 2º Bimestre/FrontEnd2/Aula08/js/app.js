function mudarCor(objDiv, cor){
    objDiv.style.backgroundColor = cor;
}

function mudarPosicao(objBtn) {
    objBtn.style.position = "absolute";
    objBtn.style.left = Math.random()*500+"px";
    objBtn.style.top = Math.random()*500+"px";
}

function cumprimentarAuto() {
    var data = new Date();
    var hora = data.getHours();
    if(hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }
    alert ("Olá, " + mensagem);
}