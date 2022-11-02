// Mostre um alerta na página quando a tela terminar de ser carregada.
window.addEventListener("load",function(){alert("Olá!")})

// criar o form 
let form = document.createElement('form');
//criar a label e o input do nome e adicioná-los no form
let nome = document.createElement('input');
let labelNome = document.createElement('label');
nome.type = "text";
labelNome.innerText = "Nome";
form.appendChild(labelNome);
form.appendChild(nome);
//criar a label e o input do email e adicioná-los no form
let email = document.createElement('input');
let labelEmail = document.createElement('label');
email.type = "email";
labelEmail.innerText = "Email";
form.appendChild(labelEmail);
form.appendChild(email);
//criar botão submit e adicioná-lo no form
let btnEnviar = document.createElement('input');
btnEnviar.type = "submit";
btnEnviar.value = "Enviar";
form.appendChild(btnEnviar);
//criar botão reset e adicioná-lo no form
let btnReset = document.createElement('input');
btnReset.type = "reset";
btnReset.value = "Reset";
form.appendChild(btnReset);
//função para inpedir que o botão submit atualize a pagina
function naoCarrega(evento) {
    evento.preventDefault();
}
//função para mudar a cor do texto quando a seta do mouse estiver em cima
function mudarCorTexto(el) {
    el.style.color = "red";
    document.getElementById('qntdCor').innerText ++;
}
// o mesmo que a funcao de cima mas quando a seta sai do elemento
function tirarCorTexto(el) {
    el.style.color = "blue";
}
//setar os atributos onmouseover e onmouseout no botão
btnEnviar.setAttribute("onmouseover","mudarCorTexto(this)")
btnEnviar.setAttribute("onmouseout","tirarCorTexto(this)")
//chamar a funcao naoCarrega
form.addEventListener('submit', naoCarrega);
//adicionar toda essa cambada ao html
document.querySelector('body').appendChild(form);
//estilização do form 
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "15px";
form.style.width = "300px";
form.style.margin = "0 auto";
form.style.marginTop = "200px";