const num = 8;

const factorial = (n) => {
	if(n === 1) return 1
	return n * factorial(n-1)
}


console.log(`Factorial ${num} = ${factorial(num)}`)


const fibonachi = n => {
	if(n <= 1) return n
	return fibonachi(n-1) + fibonachi(n-2)
}

console.log(`Fibonachi ${num} = ${fibonachi(num)}`)