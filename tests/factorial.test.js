const { default: expect } = require('expect');
// const { divisor} = require('../fizzBuzz');
const factorial = require('../factorial.js');

test( "Returns the factorial of a number", ()=> { 
    expect(factorial.fact0_1(1)).toBe(1)
})

test( "Returns the factorial of a number", ()=> { 
    expect(factorial.factor(5)).toBe(120)
})




