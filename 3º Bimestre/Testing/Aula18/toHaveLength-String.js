/* Também podemos usar este matcher para ver o tamanho de uma string:*/

const exp = objExpReg();
test('Verificamos o tamanho da string', () => {
 expect(exp.responseFAIL).toHaveLength(13);
 });