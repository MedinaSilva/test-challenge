// Calculate the factorial of a number using recursion

function factorial (numero) {
    if(numero ===0 || numero === 1) {
        return 1;
    } else {
        return numero*factorial(numero - 1);
        
    }
    
}

console.log(factorial(5));
