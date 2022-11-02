let formulario = document.createElement('form');
formulario.setAttribute('method', 'post');
formulario.setAttribute('action', '#');
document.body.appendChild(formulario);

let divnome = document.createElement('div');
divnome.setAttribute('class', 'cadastro');
let nome = document.createElement('input');
nome.setAttribute('type', 'text');
nome.setAttribute('name', 'nome');
divnome.appendChild(nome);

let sobrenome = document.createElement('input');
sobrenome.setAttribute('type', 'text');
sobrenome.setAttribute('name', 'sobrenome');
divnome.appendChild(sobrenome);

let email = document.createElement('input');
email.setAttribute('type', 'email');
email.setAttribute('name', 'email');
divnome.appendChild(email);

formulario.appendChild(divnome);

var variavel = Array.from(document.getElementsByClassName('cadastro'))
variavel.forEach((el,index) => {
    el.addEventListener('focusout', () => {
        el.children[index].setAttribute('disabled',true);
    })
    el.addEventListener('mouseover', () => {
        el.children[index].setAttribute('disabled',true);
    })
    el.addEventListener('mouseout', () => {
        el.children[index].removeAttribute('disabled',false);
    })
}
)

