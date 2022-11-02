let btn = document.querySelector('.checkbox');
btn.addEventListener('checkbox', function(event){
    event.preventDefault();
    corSite = document.body.style.background = '#201e1e';
});

console.log('.checkbox');






/*
let btn1 = document.querySelector('#btn1');
//adicionado função ao botão
btn1.addEventListener('click', function(event){
    //Prevent Defalut - comportamento default
    event.preventDefault();
    corSite = document.body.style.background = '#201e1e';
    title = document.body.style.color = 'white';
});

// selecionado botão 2 do html
let btn2 = document.querySelector('#btn2');
// adicionado função ao botão 
btn2.addEventListener('click', function(event){
    // Prevent Defalut - comportamento default 
    event.preventDefault();
    corSite = document.body.style.background = 'white';
    title = document.body.style.color = '#201e1e';
}); */