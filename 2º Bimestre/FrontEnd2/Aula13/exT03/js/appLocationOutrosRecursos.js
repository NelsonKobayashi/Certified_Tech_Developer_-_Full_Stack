let textoCompleto =location.hash; // hash é uma parte do endereço da url
document.write(textoCompleto);
document.write("<br>");

let dados = textoCompleto.split("#"); //caracter delimitador
document.write(dados); //convertido em array

//separando os dados
let dados1 = dados[1]; 
document.write(dados1);
document.write("<br>");
let dados2 = dados[2];
document.write(dados2);

// origem - origin

let origem = location.origin;
document.write(origem); // protocolo hotsname portament
document.write("<br>");
document.write("<br>");

//pathname --> caminho do arquivo
let nomeCaminho = location.pathname; // caminho textoCompleto
document.write(nomeCaminho);
document.write("<br>");
document.write("<br>");

//port / protocolo 
let protocolo = location.protocal;
document.write(protocolo);
