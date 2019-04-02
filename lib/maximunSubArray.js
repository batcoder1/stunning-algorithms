/**
 * maximunSubArray
 * find a subarray into input array, where this subarray has the biggest sum
 * @param {number[]} arr
 * @returns {number[]}
 */
function maximunSubArray(arr) {
    const positiveNumbers = arr.filter(num => num >= 0);
    const subArray = [];
    if (arr.length === positiveNumbers.length) {
        return arr
    }

    const negativeNumbers = arr.filter(num => num < 0);
    if (arr.length === negativeNumbers.length) {
        const sorter = arr.sort()
        return [sorter[0]]
    }

    let maxEnding = arr[0];
    let maxFar = arr[0];
    for (let index = 1; index < arr.length; index++) {
        maxEnding = Math.max(arr[index], maxEnding + arr[index]);
        maxFar = Math.max(maxFar, maxEnding)


    }

    const indexBegin = [];
    arr.forEach((num, index) => {
        if (num < maxFar && num > 0) {
            indexBegin.push(index)
        }
    });

    for (let i = 0; i < indexBegin.length; i++) {
        let sum = 0;
        let subArrayPosibility = [];
        for (let index = indexBegin[i]; index < arr.length; index++) {
            sum = sum + arr[index]
            if (sum <= maxFar) subArrayPosibility.push(arr[index]);
            if (sum === maxFar) break;

        }
        let sumElemens = subArrayPosibility.reduce((a, b) => {
            return a + b
        })
        if (maxFar === sumElemens) return subArrayPosibility

    }



    return subArray
}
module.exports = maximunSubArray;