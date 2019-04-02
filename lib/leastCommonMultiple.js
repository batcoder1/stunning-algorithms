/**
 * leastCommonMultiple
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function leastCommonMultiple(a, b) {
    let multiplesA = arrayMultiples(a);
    let multiplesB = arrayMultiples(b);
    let commons= [];
    multiplesA.forEach(a => multiplesB.forEach(b =>{
      if (a===b) commons.push(a);
    }));
    return commons.sort()[0]
}

function arrayMultiples(num){
    const arr= []
    let multiple = 0;
    for (let index = 0; index < 10; index++) {
        multiple = multiple + num;
      
        arr.push(multiple);
        
    }
    return arr
}

module.exports = leastCommonMultiple;