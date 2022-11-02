document.getElementById("btnTrocarConteudo").addEventListener('click', carregarDocumento = () =>{
    alert("Função ativada!");
    const xhttp = new XMLHttpRequest(); //através desse request que fazemos todas as requisições
    xhttp.onload = function () { 
        const xmlDoc = this.responseXML;
        const dado = xmlDoc.getElementsByTagName("ARTIST");
        let txt = "";

        for(let i = 0; i < dado.length; i++) {
            txt = txt + dado[i].childNodes[0].nodeValue + "\n";
        }

        document.getElementById("demo").innerHTML = txt;
    }
    xhttp.open("GET", "arquivos/cd_catalog.xml");
    xhttp.send(); //envia uma requisição para o servidor.
});