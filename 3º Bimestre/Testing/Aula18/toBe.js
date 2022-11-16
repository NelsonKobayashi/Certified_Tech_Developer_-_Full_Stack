/* Usado para comparar valores primitivos (inteiros, flutuantes, etc) */

describe('Operações matemáticas', () =>{
    test('Realizamos a soma', () => {
        expect(somar(1,1)).tobe(2);
    })

    test('Realizamos a subtração', () => {
        expect(subtrair(1,1)).tobe(0);
    })
})

