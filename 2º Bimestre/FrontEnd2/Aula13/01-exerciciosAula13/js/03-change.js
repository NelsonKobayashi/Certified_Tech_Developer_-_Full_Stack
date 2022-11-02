let txtNome = document.querySelector('#txtNome');

txtNome.addEventListener('change', function(mudarValor){

    let txtNome=document.getElementById("txtNome");
    txtNome.value=txtNome.value.toUpperCase();
    alert("Function mudarValor gerou..... "+txtNome.value);

});

