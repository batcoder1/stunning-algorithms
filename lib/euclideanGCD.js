/**
 * eucliedan Algoritm
 * In mathematics, the Euclidean algorithm, or Euclid's algorithm, 
 * is an efficient method for computing the greatest common divisor (GCD) 
 * of two numbers, the largest number that divides both of them 
 * without leaving a remainder.
 * @param {*} a
 * @param {*} b
 * @returns mcd
 */
function euclideanGCD(a, b) {
    const dividersA = dividers(a) 
    const dividersB = dividers(b)
    let commons= [];
    dividersA.forEach(a => dividersB.forEach(b =>{
      if (a===b) commons.push(a);
    }));
     
    const gcd = commons.pop();
    return gcd
}

/**
 * Dividers
 * return input number dividers
 * @param {*} num
 * @returns
 */
function dividers(num){
    let divs = []
    
    for (let index = 2; index < num + 1; index++){
        let rest = num % index
        if (rest === 0) divs.push(index)
       
    }
    return divs;

        
}
module.exports = euclideanGCD;