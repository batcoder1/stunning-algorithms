const factorial =  require('./factorial');
/**
 * Calcula sin of a angle
 *
 * @param {*} angle
 * @returns
 */
function sin(angle){
    if (angle == 0) return 0;
    if (angle == 90) return 1;
    const radians = angle/180 * Math.PI;
    const sinCalculated = radians -(Math.pow(radians, 3)/factorial(3)) + (Math.pow(radians, 5)/factorial(5)) - (Math.pow(radians, 7)/factorial(7)) +  - (Math.pow(radians, 9)/factorial(9)) +0.0000001;
    const sinCalculatedTruncated = truncate(sinCalculated, 7);
    return sinCalculatedTruncated;
}

/**
 * 
 *
 * @param {number} inputNumber number to truncate
 * @param {number} truncateLength desired decimals
 */
function truncate(inputNumber, truncateLength){
    let output = ['0','.']
    inputNumber.toString().split('.')[1].split('').forEach( (num, index) => {
        if(index < truncateLength) output.push(num)
    });
    const truncated = parseFloat(output.join('')) ;
    return truncated;
}

module.exports = sin;