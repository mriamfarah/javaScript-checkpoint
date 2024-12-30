// Factorial
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


console.log(factorial(5));
console.log(isPrime(7));
console.log(isPrime(10)); 
console.log(fibonacci(10)); 