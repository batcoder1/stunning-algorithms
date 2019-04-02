const assert = require('assert')
const reverseInteger = require('../lib/reverseInteger')
 

describe("Integer reversal", ()=> {
    it("should reverse integer", () => {
        assert.equal(reverseInteger(1234), 4321);
        assert.equal(reverseInteger(-1200), -21)
    })
})
 