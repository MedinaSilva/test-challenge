const { default: expect } = require('expect');
// const { divisor} = require('../fizzBuzz');
const divisor = require('../fizzBuzz.js');


test( "Returns if the number is  divisor of 3, 5 or both", ()=> { 
    expect(divisor.div3_5(15)).toBe('FizzBuzz')
})

test( "Returns if the number is  divisor of 3, 5 or both", ()=> { 
    expect(divisor.div3(3)).toBe('Fizz')
})

test( "Returns if the number is  divisor of 3, 5 or both", ()=> { 
    expect(divisor.div5(5)).toBe('Buzz')
})