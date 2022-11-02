let i = 0; 

document.querySelector("#iniciarCarga").addEventListener("click", 
function carregar(){
    if (i == 0){
        i = 1;
        let elemento = document.getElementById("minhaBarra");
        let largura = 1;
        let id = setInterval(barra, 10);
        function barra() {
            if(largura >= 100) {
                clearInterval(id);
                i = 0; 
            } else {
                largura++; 
                elemento.style.largura = largura + "%";
                elemento.innerText = largura + "%";
            }
        }
    }
});