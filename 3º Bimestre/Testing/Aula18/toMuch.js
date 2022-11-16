/* Verifica se um texto corresponde a uma expressão regular: */

const exp = objExpReg();
 test('Verificamos o formato do e-mail', () => {
 expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
 })