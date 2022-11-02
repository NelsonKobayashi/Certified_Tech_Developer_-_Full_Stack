// 1. Encontre e armazene o elemento no qual queremos ouvir os eventos.
let face = document.getElementById("face");
// 2. Defina a função que responderá ao evento.
let MovimentoDoMouse = function movimentoMouse() {
    document.getElementById("mensagem").textContent += "Movimento do Mouse Detectado ";  
};
// 3. Adicione o ouvinte de evento para o elemento e função
face.addEventListener("mousemove", MovimentoDoMouse);