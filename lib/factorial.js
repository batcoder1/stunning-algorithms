/**
 * Factorial
 * Calculates the factorial of a number
 * @param {number} num
 * @returns {number} 
 */
function factorial(num){
   return (num > 1)? num * factorial(num -1): 1
 
}
module.exports = factorial;