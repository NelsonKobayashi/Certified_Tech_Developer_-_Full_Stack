// Aula 04 - 02-06-2021
// Condicionais IF e && (E) / || (OU)

let cumpriuTarefas = true;
let arrumouCama = false;

if (cumpriuTarefas == true && arrumouCama == true){
    console.log("Muito bem!");
}
else{
    console.log("Volte e complete as tarefas.");
}

if (cumpriuTarefas == true || arrumouCama == true){
    console.log("Não fez tudo, mas está valendo!");
}
else{
    console.log("Volte e complete as tarefas.");
}