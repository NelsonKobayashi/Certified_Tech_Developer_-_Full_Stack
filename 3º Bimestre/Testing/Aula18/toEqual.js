/* Usado para comparar objetos e todas as suas propriedades */

describe('Common Matchers', () => {
    const dados = {
        name: 'Person 1',
        age: 10
    }

    const dados2 = {
        name: 'Person 1',
        age: 10
    }    

    test('Verificamos se os objetos são iguais', () => {
        expect(dados).toEqual(dados2);
    })
})