function media(notas) {
    let notaFinal = 0;
    /* percorrendo o array e imprimindo no console*/
    notas.forEach(element => {
        console.log (`sua nota foi no bimentre ${element}`);
        notaFinal += element;
        console.log (`Sua nota até o momento é ${notaFinal}\n`);
    });

    /* calculando a média */
    let mediaFinal = notas.reduce((acc, value) => acc + value) / notas.length;
    
    /* verificando se o aluno foi aprovado ou não */
    mediaFinal > 7 ? console.log(`Parabéns! Sua média final foi ${mediaFinal}\n\n`):
                     console.log(`Sua média final foi ${mediaFinal}, nos vemos na recuperação!\n`);
}
media([8,9,8,9]);
media([6,5,7,6]);