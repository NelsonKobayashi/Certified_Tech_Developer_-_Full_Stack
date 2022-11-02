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

