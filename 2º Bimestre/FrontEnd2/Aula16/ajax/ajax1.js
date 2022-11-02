document.getElementById("btnTrocarConteudo").addEventListener('click', carregarDocumento = () =>{
    alert("Função ativada!");
    const xhttp = new XMLHttpRequest(); //através desse request que fazemos todas as requisições
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = 
        this.responseText;
    }
    xhttp.open("GET", "arquivos/ajax_info.txt");
    xhttp.send(); //envia uma requisição para o servidor.
});