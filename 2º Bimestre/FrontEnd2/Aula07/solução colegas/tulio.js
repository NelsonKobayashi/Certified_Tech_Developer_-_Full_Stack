let form = document.querySelector('form');

form.innerHTML = "<h1>Login</h1>";

let inputEmail = document.createElement('input');
form.appendChild(inputEmail);
inputEmail.setAttribute('placeholder', 'email');

let inputPassword = document.createElement('input');
form.appendChild(inputPassword);
inputPassword.setAttribute('type', 'password');

let btnEnviar = document.createElement('button');
form.appendChild(btnEnviar);
btnEnviar.innerText = "Enviar";

let btnReset = document.createElement('button');
form.appendChild(btnReset);
btnReset.innerText = "Cancelar";

inputEmail.disabled = false;

inputEmail.style.display = "block";
inputPassword.style.display = "block";
inputPassword.style.marginBottom = "1rem";
btnEnviar.style.marginRight = "1rem";

// inputEmail.removeAttribute('placeholder');


