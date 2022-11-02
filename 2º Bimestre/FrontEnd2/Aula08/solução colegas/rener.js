//Crie um formulário com campos de input e botões de submit e reset.

document.body.innerHTML += "<h1>Login</h1>";

document.body.innerHTML += "<input (type='text', placeholder='enter username')></input>";

document.body.innerHTML += "<input (type='password', placeholder='enter password')></input>";

document.body.innerHTML += "<button>Submit</button>";

document.body.innerHTML += "<button>Reset</button>";

//Previna a página de ser recarregada quando houver o submit utilizando preventDefault().

let submit = document.querySelector('button');

submit.addEventListener("click", function (evento) {
    evento.preventDefault();
}) 

//Mostre um alerta na página quando a tela terminar de ser carregada.

window.addEventListener('load', alert('Página carregada'));

//Adicione uma cor a um texto quando o mouse ﬁcar acimado mesmo e outra cor quando ele sair do mesmo.

let input = document.querySelector('input');

input.addEventListener("mouseover", function mudarCor() {
    input.style.backgroundColor = "#cccccc"
});

input.addEventListener("mouseout", function reverterCor() {
    input.style.backgroundColor = "white"
});

//Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag p e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p>.

const p = document.createElement("p");
document.body.appendChild(p);

let count = 0
input.addEventListener("keypress", function () {
    p.textContent = "Inserção: " + count++; 
});
