for (var i = 0; i < 3; i++){
    let div = document.createElement('div');
    document.body.append(div);
    let input = document.createElement('input');
    document.querySelectorAll('div')[[i]].append(input);

    div.style.width = input.clientWidth + 'px';
    div.style.marginBottom = '.5rem';

    input.addEventListener('focusout', ()=>{ input.value == "" ? input.disabled = false : input.disabled = true });
    div.onmouseover = () => { input.disabled = false };
    div.onmouseout = () => { input.value == "" ? input.disabled = false : input.disabled = true };
};