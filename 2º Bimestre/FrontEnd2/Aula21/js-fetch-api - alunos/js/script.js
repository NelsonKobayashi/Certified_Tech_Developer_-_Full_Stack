const cep = document.querySelector("#cep");

const mostrarDados = (result) => {
    for(const campo in result) { //vai pegar um por um
        if(document.querySelector("#"+campo)){ // função que preencherá os campos
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}
cep.addEventListener("blur", (e) => {
    let pesquisa = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`,options)
        .then(response => {response.json()
            .then(dado => mostrarDados(dado))
        })
        .catch(e => console.log('Deu erro: ' + e, message))
})