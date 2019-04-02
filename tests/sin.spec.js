const assert = require('assert')
const sin = require('../lib/sin')
 

describe("Integer reversal", ()=> {
    it.only("sin(23) should return 0.3907312 ", () => {
        assert.equal(sin(23), 0.3907312);
    })
    it.only("sin(40) should return 0.5 ", () => {
        assert.equal(sin(30), 0.5);
    })
    it.only("sin(0) should return 0 ", () => {
        assert.equal(sin(0), 0);
    })
    it.only("sin(90) should return 1 ", () => {
        assert.equal(sin(90), 1);
    })
})
 