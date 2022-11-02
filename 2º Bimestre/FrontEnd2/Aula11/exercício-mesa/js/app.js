let linkImg = "";
let frase = "";

/* Função para gerar cards através da imagem e link fornecido pelo usuário*/
function criarCard(){
    linkImg = document.getElementById("linkImg"); //recebendo o link da imagem 
    frase = document.getElementById("frase"); // recebendo a frase

    let muralCard = document.getElementById("cards"); // recebendo a div "cards" do html e inserindo na variável
    // inserindo dentro do html as informações recebidas pelo usuário
    muralCard.innerHTML += `<div class="card"> 
                                <img src="${linkImg.value}" alt="imagem-auau">
                                <p>${frase.value}</p>
                            </div>`
    
    linkImg.value = "";
    frase.value = "";

    linkImg.focus();
    
}

