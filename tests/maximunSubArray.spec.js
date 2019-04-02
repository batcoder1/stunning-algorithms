const assert = require('assert')
const maximunSubArray = require('../lib/maximunSubArray');

describe( "Maximum1 subarray problem",()=> {
    it("2, 1, 3, 4, 1, maximun subarray should be 2, 1, 3, 4, 1", () =>{
        const array= [2, 1, 3, 4, 1 ]
        const arrayExpected = [2, 1, 3, 4, 1]
        assert.deepEqual(maximunSubArray(array), arrayExpected);
    });
    it("-2, -1, -3, -4,  maximun subarray should be 4, -1, 2, 1", () =>{
        const array= [-2, -1, -3, -4, -5]
        const arrayExpected = [ -1 ]
        assert.deepEqual(maximunSubArray(array), arrayExpected);
    });
    it("-2, -1, -3, -4,  maximun subarray should be 4, -1, 2, 1", () =>{
        const array= [-2, -1, -3, 4, -1, 2, 1, -5, 4]
        const arrayExpected = [ 4, -1, 2, 1 ]
        assert.deepEqual(maximunSubArray(array), arrayExpected);
    });
    it("-2, -1, -3, -4,  maximun subarray should be 4, -1, 2, 1", () =>{
        const array= [5, 10, -3, -4, -1, -2, 1, -5, 4]
        const arrayExpected = [ 5, 10 ]
        assert.deepEqual(maximunSubArray(array), arrayExpected);
    });
});