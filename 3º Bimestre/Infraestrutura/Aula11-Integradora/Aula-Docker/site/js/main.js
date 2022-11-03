const btnAdd = document.getElementById('btn-add');
let tarefaInput = document.getElementById('tarefa');
let dataCriacaoInput = document.getElementById('dataCriacao');
let dataFinalInput = document.getElementById('dataFinal');
let tempoInput;
const erro = document.querySelector('#erro')


/* adicionando contador/limite para o campo de título */
tarefaInput.addEventListener("input", function (e) {
    const counterTitle = document.getElementById("counterTitle");
    const inputTitleLenght = tarefaInput.value.length;

    const maxTitleLenght = tarefaInput.getAttribute('maxlength');

    counterTitle.innerText = `${maxTitleLenght - inputTitleLenght}`;
    if (inputTitleLenght >= maxTitleLenght-10) {
        counterTitle.style.color = '#f00';
    } else {
        counterTitle.style.color = '';
    };
});



let dados = (localStorage.getItem('todoList')) ?
    JSON.parse(localStorage.getItem('todoList')) : {
        todo: [],
        completed: []
    };

window.onload = () => {
    tempoInput = setInterval(() => {
        let now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
        dataCriacaoInput.value = now.toISOString().slice(0, -8);
    }, 200);
}, carregarToDoNoDOM();

btnAdd.addEventListener('click', () => {
    
    if (tarefaInput.value == '') {
        alert("O campo da Tarefa deve ser preenchido.")
        return;
    }
    if(dataFinalInput.value < dataCriacaoInput.value){
        alert("A data final deve ser maior que a data inicial.");
        return;
    }        
    if (tarefaInput.value !== '' && dataCriacaoInput.value !== '' && dataFinalInput.value !== '') {
        addTarefa(tarefaInput.value, dataCriacaoInput.value.replace(/-/g, '/').replace('T', ' '), dataFinalInput.value.replace('T', ' ').replace(/-/g, '/'))
    }
})

function addTarefa(tarefaValue, dataCriacaoValue, dataFinalValue) {

    addTarefaNoDOM(tarefaValue, dataCriacaoValue, dataFinalValue);

    dados.todo.push({
        tarefa: tarefaValue,
        dataCriacao: dataCriacaoValue,
        dataFinal: dataFinalValue
    })

    localStorage.setItem('todoList', JSON.stringify(dados));

    tarefaInput.value = '';
    tarefaInput.focus();
}

function removerTarefa() {
    if (confirm("Quer mesmo apagar? (Clique em 'OK' ou pressione 'ENTER')")) {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        let id = parent.id;

        let tarefaTxt = item.firstChild.textContent;
        let dataCriacaoTxt = item.children[1].children[0].textContent;
        let dataFinalTxt = item.children[1].children[1].textContent;

        let value = {
            tarefa: tarefaTxt,
            dataCriacao: dataCriacaoTxt,
            dataFinal: dataFinalTxt
        }

        let todo = dados.todo;
        let completed = dados.completed;

        if (id === 'todo') {
            dados.todo.splice(todo.findIndex((a) => {
                return a.tarefa === value.tarefa;
            }), 1);
        } else {
            dados.completed.splice(completed.findIndex((a) => {
                return a.tarefa === value.tarefa;
            }), 1);
        }

        localStorage.setItem('todoList', JSON.stringify(dados));

        parent.removeChild(item);
    }
}

function completarTarefa() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;

    let tarefaTxt = item.firstChild.textContent;
    let dataCriacaoTxt = item.children[1].children[0].textContent;
    let dataFinalTxt = item.children[1].children[1].textContent;

    let value = {
        tarefa: tarefaTxt,
        dataCriacao: dataCriacaoTxt,
        dataFinal: dataFinalTxt
    }

    if (id === 'todo') {
        dados.todo.splice(dados.todo.findIndex((a) => {
            return a.tarefa === value.tarefa;
        }), 1);
        dados.completed.push(value);
    } else {
        dados.completed.splice(dados.completed.findIndex((a) => {
            return a.tarefa === value.tarefa;
        }), 1);
        dados.todo.push(value);
    }

    localStorage.setItem('todoList', JSON.stringify(dados));

    let itemAlvo = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    itemAlvo.insertBefore(item, itemAlvo.childNodes[0]);
}

function addTarefaNoDOM(tarefaValue, dataCriacaoValue, dataFinalValue, isCompleted) {
    let list = (isCompleted) ? document.getElementById('completed') : document.getElementById('todo');

    let item = document.createElement('div');
    item.classList.add('to-do-div');
    item.innerHTML =
        `<h5> → ${tarefaValue}</h5>
        <div>
        <span>Add: ${dataCriacaoValue}</span>
        <span>End: ${dataFinalValue}</span>
        </div>
        `;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remover = document.createElement('button');
    remover.classList.add('remover');
    remover.innerHTML =
        `<span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fa fa-trash fa-stack-1x fa-inverse" aria-hidden="true"></i>
        </span>`;

    remover.addEventListener('click', removerTarefa)

    let completar = document.createElement('button');
    completar.classList.add('completar');
    completar.innerHTML =
        `<span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-check fa-stack-1x fa-inverse"></i>
        </span>`;

    completar.addEventListener('click', completarTarefa)

    buttons.appendChild(remover);
    buttons.appendChild(completar);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}

function carregarToDoNoDOM() {
    if (!dados.todo.length && !dados.completed.length) return;

    for (let i = 0; i < dados.todo.length; i++) {
        let valueToDo = dados.todo[i];
        addTarefaNoDOM(valueToDo.tarefa, valueToDo.dataCriacao, valueToDo.dataFinal);
    }

    for (let j = 0; j < dados.completed.length; j++) {
        let valueCompleted = dados.completed[j];
        addTarefaNoDOM(valueCompleted.tarefa, valueCompleted.dataCriacao, valueCompleted.dataFinal, true);
    }
}

/* IMPLEMENTANDO DARK MODE */
const html = document.querySelector('html');
const botao = document.querySelector('.botao');
const vela = document.getElementById('vela');

botao.addEventListener('click', function(){
    html.classList.toggle('dark-mode');
    if (html.classList == 'dark-mode'){
        vela.setAttribute('src', './img/velaApagada.png');
    } else {
        vela.setAttribute('src', './img/velaAcesa.png');
    }
})


