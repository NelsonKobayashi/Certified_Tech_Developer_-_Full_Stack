
const txtNome = document.getElementById('txtNome');

txtNome.addEventListener('change', (CaixaAlta) => {
    let txtNome=document.getElementById("txtNome");
    txtNome.value=txtNome.value.toUpperCase();
});

const txtEmail = document.getElementById('txtEmail');
txtEmail.addEventListener('change', (CaixaAlta2) => {
    let txtEmail=document.getElementById("txtEmail");
    txtEmail.value=txtEmail.value.toUpperCase();
});