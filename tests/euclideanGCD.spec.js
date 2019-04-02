const assert = require('assert')
const euclideanGCD = require('../lib/euclideanGCD')
 
 
describe( "Euclidean Algorithm GCD",()=> {
    it("the GCD of 252 and 105, should be 21", () =>{
        assert.equal(euclideanGCD(252,105), 21);
    });

});
