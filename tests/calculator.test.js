const { default: expect } = require('expect');
const { multiply } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(calculator.sum(4,2)).toBe(6);
})

test('substracts a - b', () => {
   //
   expect(calculator.substract(4,2)).toBe(2);
})

test('multiplies a * b', () => {
    //
    expect(calculator.multiply(4,2)).toBe(8);
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(4,4)).toBe(1);
})

test('Raises to power a ^ b', () => {
    //
    expect(calculator.power(4,2)).toBe(16);
})

