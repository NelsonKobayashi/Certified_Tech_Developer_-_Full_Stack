// window.onload = alert('Carregou! Não era pra carregar?');

// o body está completamente vazio
// todos os elementos serão criados no javascript

// criando form
let form = document.createElement('form');
document.body.appendChild(form);
form.innerHTML = "<h1>Login</h1>";

// criando elementos no form

let inputEmail = document.createElement('input');
form.appendChild(inputEmail);
inputEmail.setAttribute('placeholder', 'email');

let inputPassword = document.createElement('input');
form.appendChild(inputPassword);
inputPassword.setAttribute('type', 'password');

let btnEnviar = document.createElement('button');
form.appendChild(btnEnviar);
btnEnviar.innerText = "Enviar";
btnEnviar.setAttribute('type', 'submit');

let btnReset = document.createElement('button');
form.appendChild(btnReset);
btnReset.innerText = "Cancelar";
btnReset.setAttribute('type', 'reset');


// css dentro do javascript

inputEmail.style.display = "block";
inputPassword.style.display = "block";
inputPassword.style.marginBottom = "1rem";
btnEnviar.style.marginRight = "1rem";

// Elementos mudarem de cor ao ponteiro do mouse "entrar" e "sair" do elemento

btnEnviar.onmouseover = () => {btnEnviar.style.backgroundColor = "#2255ff";};
btnEnviar.onmouseout = () => {btnEnviar.style.backgroundColor = "";};

btnReset.onmouseover = () => {btnReset.style.backgroundColor = "#2255ff";};
btnReset.onmouseout = () => {btnReset.style.backgroundColor = "";};


// prevenir o carregamento ao submeter o form

let prevenirCarregamento = (e) => {
    e.preventDefault();
}

btnEnviar.onclick = prevenirCarregamento;


// contar a quantidade de letras no input email

// criando paragrafo para texto capturado
let p = document.createElement('p')
form.appendChild(p);
p.innerText = 'Input:'; 

// criando paragrafo para contador
let pCounter = document.createElement('p');
form.appendChild(pCounter);
let counter = (p.innerText.length) - 6;
pCounter.innerText = `Número de letras: ${counter}`;

// event criado usando o 'input' ao inves de 'keypress', pra que seja possível capturar quando o value é apagado.
// MDN(ctrl+clique para abrir o link): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
let getInputValue = (e) => {
    p.innerText = `Input:${e.target.value}`;
    counter = (p.innerText.length) - 6;
    pCounter.innerText = `Número de letras: ${counter}`;
};

// pode usar uma das duas formas pra chamar a função, como addEventListener('input', function) ou usando oninput = function.
inputEmail.addEventListener('input', getInputValue);
inputEmail.oninput = getInputValue;

// para que, ao clicar em cancelar, todos os campos sejam resetados
btnReset.onclick = () => {
    inputEmail.value = '';
    p.innerText = `Input:`;
    pCounter.innerText = `Número de letras: 0`;
};
