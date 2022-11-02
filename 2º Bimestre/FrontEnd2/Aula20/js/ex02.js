let xhr = new XMLHttpRequest();
xhr.open("GET", "alunos.json");
xhr.send(null);
xhr.onreadystatechange = verificaAjax;

function verificaAjax() {
    console.log("Ready state.........: ",xhr.readyState);
    console.log("Status..............: ",xhr.status);

    if(xhr.readyState == 2) {
        alert("Sucesso na requisição")
        if(xhr.status == 200 || xhr.status == 304) {
            let resposta = xhr.responseText;
            console.log(resposta);
            /* debugger;  --> para o código para testar no browser*/
        } else {
        alert("Erro na requisição")
        }  
    }

    
}
