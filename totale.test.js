const {test, expect }= require('@jest/globals')
const totale = require('./totale')



test('Adição', () => {
  expect(totale('+', '5+3')).toBe(8);
});

test('Subtração', () => {
    expect(totale('-', '5-3')).toBe(2);
});

test('Multiplicação', () => {
    expect(totale('*', '5*3')).toBe(15);
});

test('Divisão', () => {
    expect(totale('/', '6/2')).toBe(3);
});

test('Operador inválido', () => {
    expect(totale('%', '5%3')).toBe('Operador inválido');
});

test('Input vazio', () => {
    expect(totale('+', '')).toBe('Input vazio');
});

test('Input vazio', () => {
    expect(totale('/', '3/0')).toBe(0);
});
