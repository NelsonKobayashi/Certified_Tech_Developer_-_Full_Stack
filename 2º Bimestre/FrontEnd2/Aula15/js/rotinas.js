document.addEventListener("onload", executarRotinas() ); //Quando abrir o arquivo ler a function executarRotinas()
//função responsável por executar todas as rotinas.
function executarRotinas() {
    var localStorageKeyName = 'dados'; //variável que receberá os dados que serão inseridos pelo usuário.

    carregarDoLocalStorage(); //chamando a função para verificar se já tem algo no local storage. 

    document.querySelector("#btn-add").addEventListener('click', function () { // esperando click para iniciar a função.
        //recebendo elementos digitados pelo usuário e atribuindo às variáveis.
        var nome = document.getElementById("nome"),
            email = document.getElementById("email"),
            idade = document.getElementById("idade");

        // Valida se os campos se estão vazios e se idade é um número, caso contrário, pula fora da função.  
        if (nome.value.length === 0 || email.value.length === 0 || !parseInt(idade.value)) return;
        // Atribui ao objeto usuário os dados recebidos.
        var usuario = {
            nome: nome.value,
            email: email.value,
            idade: idade.value
        };

        // Limpar dados para o próximo preenchimento
        nome.value = '';
        email.value = '';
        idade.value = '';

        // Chama a função adicionarAoLocalStorage() atribuindo o objeto usuário. 
        adicionarAoLocalStorage(usuario);
    })
    // função responsável por adicionar os dados digitados no form para o local storage.
    // O parâmetro obj, é o usuario, definido acima. 
    function adicionarAoLocalStorage(obj) {
        var usuarios = [], //criando nova variável e atribuindo um array vazio a ela.
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName); // atribuindo à variavel dadosNoLocalStorage a chave atribuida no inicio deste arquivo.

        if (dadosNoLocalStorage !== null) { // testando se não é nulo, caso verdadeiro, ele transforma os dados em um objeto js.
            usuarios = JSON.parse(dadosNoLocalStorage);
        }
        // insere o objeto coletado anteriormente na variável usuarios.    
        usuarios.push(obj);
        // setando o localStorageKeyName e atribuindo os valores da variavel usuarios em formato JSON. 
        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));
        // chamando a função carregarDoLocalStorage();
        carregarDoLocalStorage();
    }
    // função 
    function carregarDoLocalStorage() {
        var usuarios = [], //criando nova variável e atribuindo um array vazio a ela.
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName), // atribuindo à variavel dadosNoLocalStorage a chave atribuida no inicio deste arquivo.
            gridBody = document.querySelector("#grid tbody"); // atruibuindo ao gridBody os id seletores grid e tbody.

        if (dadosNoLocalStorage !== null) { // testando se não é nulo, caso verdadeiro, ele transforma os dados em um objeto js.
            usuarios = JSON.parse(dadosNoLocalStorage);
        }

        // Draw TR from TBODY
        gridBody.innerHTML = ''; // limpa a memória para o próximo preenchimento. 
        // atribuindo à usuarios às variáveis do html. 
        usuarios.forEach(function (x, i) {
            var tr = document.createElement("div"),
                tdName = document.createElement("div"),
                tdJob = document.createElement("div"),
                tdAge = document.createElement("div"),
                tdRemove = document.createElement("div"),
                btnRemove = document.createElement("button");

            tdName.innerHTML = x.nome; // inseri no html o nome  
            tdJob.innerHTML = x.email; // inseri no html o email
            tdAge.innerHTML = x.idade; // inseri no html o idade

            // inserindo na variável btnRemove ao nome
            btnRemove.textContent = 'Remove'; 
            // inserindo evendo clicável, que apaga a informação inserida.
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });
            //inserindo o botão no html.
            tdRemove.appendChild(btnRemove);
            //inserindo a div do nome no html.
            tr.appendChild(tdName);
            //inserindo a div do email no html.
            tr.appendChild(tdJob);
            //inserindo a div da Idade no html.
            tr.appendChild(tdAge);
            //inserindo a div botão no html.
            tr.appendChild(tdRemove);
            // inserindo o gridBody.
            gridBody.appendChild(tr);
        });
    }
    // função para limpar o local storage
    function removeFromLocalStorage(index){
        var usuarios = [], // criando variavel usuarios e atribuindo array vazio.
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName); // atribuindo à variavel dadosNoLocalStorage a chave atribuida no inicio deste arquivo.

        usuarios = JSON.parse(dadosNoLocalStorage); // transforma os dados em um objeto js.

        usuarios.splice(index, 1); // selecionando o usuário a ser removido. 

        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios)); // inserindo novamente os dados para o local storage com o array atualizado.
        
        carregarDoLocalStorage();// carrega novamente os dados para serem apresentados na tela.
    }
}