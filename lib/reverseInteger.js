/**
 * ReverseInteger
 *
 * @param {number} inputNumber
 * @returns {number} reverse
 */
function reverseInteger(inputNumber){
    const filtered = inputNumber.toString().split('').filter(elem => elem == '-')

    let reverse = inputNumber.toString().split('').reverse().join('');
    reverse = (filtered.length > 0)? `-${reverse}`:reverse
    return parseInt(reverse);
}
module.exports = reverseInteger;