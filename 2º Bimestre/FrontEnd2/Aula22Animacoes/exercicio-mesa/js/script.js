let texto = document.getElementById("slideFont");
let imagem = document.getElementById("slideImg");
let fundo = document.getElementById("slideBack");
let cor = document.getElementById("slideColor");

texto.addEventListener("input", () => {
    let p = document.querySelector("p");
    p.style.fontSize = texto.value + "px"; 
})

imagem.addEventListener("input", () => {
    let img = document.querySelector("img");
    img.style.width = imagem.value + "%";
})

fundo.addEventListener("input", () =>{
    let back = document.querySelector("video");
    back.style.opacity = fundo.value + "%";    
    
})

cor.addEventListener("input", (e) =>{
    let color = document.querySelector("h1");
    color.style.color = "RGB(" + e.target.value + ", 0, 256)"  
    console.log(e.target.value);
})

/* 
sliderCorDaFonte.addEventListener("change", ()=>{
    let valorCorDaFonte = sliderCorDaFonte.value
    textoParaMudarCor.style.color = "hsl(" + valorCorDaFonte + ", 50%, 50%)"
}) */