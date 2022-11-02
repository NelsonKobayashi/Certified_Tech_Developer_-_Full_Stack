

//(funciona apenas nos elementos <input>, <textarea> e <select>).

const txtNome = document.getElementById('txtNome');

//O evento focus é usado para dar foco a um elemento (se ele puder ser focalizado).
txtNome.addEventListener('focus', (dentro) => {
    document.getElementById("txtNome").style.background = "red";
});

//O evento blur é acionado quando um elemento perde foco. 
txtNome.addEventListener('blur', (fora) => {
    document.getElementById("txtNome").style.background = "blue";
});
