// Calculate the factorial of a number using recursion

// function factorial (numero) {
//     if(numero ===0 || numero === 1) {
//         return 1;
//     } else {
//         return numero*factorial(numero - 1);
        
//     }
    
// }

const factorial = {
    fact0_1(num){
        if(num ===0 || num === 1) {
            return 1;
        }
    },
    factor(num){
        if(num != 1 && num!=0)
        return num*factor(num - 1);
    }
}

module.exports = factorial;
// console.log(factorial(4));
