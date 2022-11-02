//aula12 30/06/2021
//O map() -> método que cria uma nova matriz com os resultados da chamada de uma função, para cada elemento da matriz

let letrasMinusculas = ['a', 'b', 'c', 'd'];
console.log(letrasMinusculas);


let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(letras) {
        return letras.toUpperCase();
    }
)
console.log(letrasMaiusculas);


//com arrow functions
let letrasMaiusculas2 = letrasMinusculas.map (maiuscula2 = letras2 => letras2.toUpperCase());
console.log(letrasMaiusculas2);




