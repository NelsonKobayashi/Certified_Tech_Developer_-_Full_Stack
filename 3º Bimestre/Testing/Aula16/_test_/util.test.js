const { test, expect } = require('@jest/globals');
const { generateText} = require('../util.js');

test('Saída de nome e idade', ()=>{
    const text = generateText('Tiago Gomes', 27);
    expect(text).toBe('Tiago Gomes (27 years old)');
});