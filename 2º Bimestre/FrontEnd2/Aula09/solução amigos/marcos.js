var formulario = document.createElement('form');

var div = [];
var inputs = [];
for (let i=0; i < 3; i++) {
    div.push(document.createElement('div'));
    inputs.push(document.createElement('input'));
}

for (let i=0; i < 3; i++) {
    div[i].style.display = "inline-block";
}

for (let i=0; i < 3; i++) {
    div[i].appendChild(inputs[i]);
    formulario.appendChild(div[i]);

    inputs[i].setAttribute('disabled', true);

    div[i].addEventListener('mouseover', () => {
        inputs[i].removeAttribute('disabled');
    });

    div[i].addEventListener('mouseout', () => {
        inputs[i].setAttribute('disabled', true);
    });
}

window.addEventListener("load", function() {

    document.querySelector('body').appendChild(formulario);

})