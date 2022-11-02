btnSubmit.addEventListener('submit', function(pegarCamposDigitados) {


// E use índice, id ou nome para acessar o elemento. O seguinte acessa o primeiro elemento do formulário:
const form = document.getElementById('formulario');
//And use index, id, or name to access the element. The following accesses the first form element:
const txtNome = form.elements['txtNome'];
const txtEmail = form.elements['txtEmail'];

// getting the element's value
let nome = txtNome.value;
let email = txtEmail.value;

alert(nome);
alert(email);

});
