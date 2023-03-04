// Write a function that takes in a number and returns one of the following:

// If the number is divisible by 3, return 'Fizz'.
// If the number is divisible by 5, return 'Buzz'.
// If the number is divisible by 3 and 5, return 'FizzBuzz'
// Else, return the number passed as an argument
// function divisor (num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         return 'FizzBuzz';
//     } else if (num % 3 == 0) {
//         return console.log ('Fizz');
//     } else if (num % 5 == 0) {
//         return console.log ('Buzz');
//     } else{
//         return console.log(num); 
//     }
// }
const divisor = {
    div3_5(num) {
        if (num % 3 == 0 && num % 5 == 0) {
            return 'FizzBuzz'; 
        }
    },
    div3(num) {
        if (num % 3 == 0) {
            return 'Fizz';
        }
    },
    div5(num) {
        if(num % 5 == 0) {
            return 'Buzz';
        }
    },
}

module.exports = divisor;
//console.log(divisor(15));