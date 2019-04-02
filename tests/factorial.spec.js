const assert = require('assert')
const factorial = require('../lib/factorial')
 
describe( "Factorial",()=> {
   
    it("0 factorial , should be 1", () =>{
        assert.equal(factorial(0), 1);
    });
    it("1 factorial , should be 1", () =>{
        assert.equal(factorial(1), 1);
    });
    it("2 factorial , should be 1", () =>{
        assert.equal(factorial(2), 2);
    });
    it("3 factorial , should be 6", () =>{
        assert.equal(factorial(3), 6);
    });
    it("4 factorial , should be 24", () =>{
        assert.equal(factorial(4), 24);
    });
    it("5 factorial , should be 120", () =>{
        assert.equal(factorial(5), 120);
    });

});

