let txtNome = document.querySelector('#txtNome');

txtNome.addEventListener('blur', function(perdeFoco){
    txtNome.blur();   
    alert('O input perdeu o foco');
    document.getElementById("txtNome").style.background = "#D3D3D3";
});

