const { test, expect } = require('@jest/globals');
const limpar = require('../funcionalidad');

test('LimparEssaPorcaria', (resultado) => {
    const text = limpar('10');
    expect(text).toBeNaN("");
});

/* const {limpar} = require('../funcionalidad.js')

const id = 'resultado'
const el = document.createElement('span')
el.setAttribute('id', id)
el.innerHTML = '10'
document.body.appendChild(el)

describe('Validar função limpar', () => {
	test ('Limpar', () => {
	    const validateElement = document.getElementById(id)
	    expect(validateElement.innerHTML).toBe('10')
	    limpar();
	    expect(validateElement.innerHTML).toBe("")
    })
})
 */