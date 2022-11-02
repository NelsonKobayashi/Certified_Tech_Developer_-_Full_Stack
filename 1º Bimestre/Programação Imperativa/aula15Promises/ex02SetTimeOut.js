// 12-07-21 - Aula 15
// Promises
// SetTimeout
//Esperando por um tempo limite

console.log("Requisição em andamento...")
setTimeout(
    function () {
        funcaoConectar("Server Conectado - OK")
    }, 3000
);

function funcaoConectar(value) {
    console.log(value);
}




