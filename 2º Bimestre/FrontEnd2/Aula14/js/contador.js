
if (typeof (Storage) != "undefined") { //verifica se esxiste Storage
    if (localStorage.visitas) { // verifica se existe o localStorage.visitas = true
        /* local.setItem("visitas", 1) */ // versão clássica
        localStorage.visitas = Number(localStorage.visitas) + 1; // transforma visitas em Number e soma +1 em visitas no localStorage
    } else { // cria o localStorage.visitas
        //localStorage.setItem("visitas","1"); //versão clássica --> aceita apenas string
        localStorage.visitas = 1; // versão objetiva
    }
    // imprimirá caso seja a primeira vez: "visitas: 1"
    document.write("Visitas.......: " + localStorage.visitas);
} else {
    document.write("Sem suporte a Web Storage")
}


/* Solução do Marcos
if (localStorage.visitas) {
    localStorage.visitas = Number (localStorage.visitas) + 1;
} else {
    localStorage.visitas = 1;
}
document.write("Visitas...: " + localStorage.visitas);
*/

/* Solução do Luiz
if (!localStorage.a)
    localStorage.setItem('a', '1')
else
    localStorage.a = Number(localStorage.a) + 1;
document.write(`Visitas: ${localStorage.a}`)
 */

/* Solução do Jardel
let visitas = localStorage.getItem('visitas') !== null ? JSON.parse(localStorage.getItem('visitas')) : 1;
let contador = visitas++;
document.write("Visitas...: " + contador);
localStorage.setItem('visitas', JSON.stringify(visitas));
if(contador % 5 == 0) {
    let reset = confirm("Zerar contador?");
    if(reset) {
        localStorage.removeItem('visitas');
        location.reload();
    }
}
 */

/* Solução do Brasil 
let visitas = localStorage.getItem('visitas') ||(()=>{localStorage.setItem('visitas', 0); return 0})();
visitas = Number(visitas)+1;
localStorage.setItem('visitas', visitas);
document.querySelector("Body").append("Visitas: "+localStorage.getItem('visitas'));
 */