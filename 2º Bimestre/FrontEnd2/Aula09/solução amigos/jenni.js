// 27/08/21 - Revisão

//formulário
var formulario = document.createElement("form");
document.body.appendChild(formulario);
formulario.setAttribute('method', 'post');
formulario.setAttribute('action', '#');


//inputs e labels

//Label - nome
let nomeLabel = document.createElement("label");
nomeLabel.setAttribute("for", "nome");
formulario.appendChild(nomeLabel);

//input - nome
let nome = document.createElement('input');
nome.setAttribute('type', 'text');
nome.setAttribute('name', 'nome');
nome.setAttribute('id', 'nome');
nome.setAttribute('class', 'input-form');
nomeLabel.appendChild(nome);

//Label - sobrenome
let sobrenomeLabel = document.createElement("label");
sobrenomeLabel.setAttribute("for", "sobrenome");
formulario.appendChild(sobrenomeLabel);

//input - sobrenome
let sobrenome = document.createElement('input');
sobrenome.setAttribute('type', 'text');
sobrenome.setAttribute('name', 'sobrenome');
sobrenome.setAttribute('id', 'sobrenome');
sobrenome.setAttribute('class', 'input-form');
sobrenomeLabel.appendChild(sobrenome);

//Label - email
let emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
formulario.appendChild(emailLabel);

//input - email
let email = document.createElement('input');
email.setAttribute('type', 'email');
email.setAttribute('name', 'email');
email.setAttribute('id', 'email');
email.setAttribute('class', 'input-form');
emailLabel.appendChild(email);


let inputs = [nome, sobrenome, email];
let labels = [nomeLabel, sobrenomeLabel, emailLabel];

for (let index = 0; index <= inputs.length; index++) {
    //style nos inputs
    inputs[index].style.margin = "0 5px";

    // Evento: onfocusout - quando o elemento(input) não está focado/selecionado 
    inputs[index].addEventListener('focusout', () => {
        inputs[index].disabled = true;

        // Evento: onmouseout - quando o cursor não está sobre a label
        labels[index].addEventListener('mouseout', () => {
            inputs[index].disabled = true;
        });
    });

    // Evento: onmouseover - quando o cursor está sobre a label
    labels[index].addEventListener('mouseover', () => {
        inputs[index].removeAttribute('disabled');
    });
}



// refatoração: -- com base no código do Marcos Spano
/*
var formulario = document.createElement('form');
document.querySelector('body').appendChild(formulario);

var label = [];
var inputs = [];

// criar div e inputs
for (let i=0; i < 3; i++) {
    label.push(document.createElement('label'));
    inputs.push(document.createElement('input'));
};

for (let i=0; i < 3; i++) {
    label[i].appendChild(inputs[i]);
    formulario.appendChild(label[i]);

    //inputs[i].setAttribute('disabled', true);
    inputs[i].addEventListener('focusout', () => {
        inputs[i].setAttribute('disabled', true);
        label[i].addEventListener('mouseout', () => {
            inputs[i].setAttribute('disabled', true);
        });
    });

    label[i].addEventListener('mouseover', () => {
        inputs[i].removeAttribute('disabled');
    });

};
*/