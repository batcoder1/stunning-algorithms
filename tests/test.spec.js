const assert = require('assert')
const reverseString = require('../lib/reverseString')
const reverseInteger = require('../lib/reverseInteger')
const isPalindrome = require('../lib/isPalindrome')
const leastCommonMultiple = require('../lib/leastCommonMultiple')
const euclideanGCD = require('../lib/euclideanGCD')
const factorial = require('../lib/factorial')
const pythagorean = require('../lib/pythagorean')
describe ("Reversión de cadenas", () => { 
    it (" Debe invertir la cadena ", () => { 
      assert.equal (reverseString ("Hello World!"), "!dlroW olleH"); 
    }); 
}) ;

describe("Palindrome", () => {
    it("Should return true", () => {
     assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
    });
    it("Should return false", () => {
     assert.equal(isPalindrome("sit ad est love"), false);
    });
});

describe("Integer reversal", ()=> {
    it("should reverse integer", () => {
        assert.equal(reverseInteger(1234), 4321);
        assert.equal(reverseInteger(-1200), -21)
    })
})
describe( "Least Commun multple",()=> {
    it("from 4 and 6, should be 12", () =>{
        assert.equal(leastCommonMultiple(4,6), 12);
    });

});
describe( "Euclidean Algorithm GCD",()=> {
    it("the GCD of 252 and 105, should be 21", () =>{
        assert.equal(euclideanGCD(252,105), 21);
    });

});
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

describe( "Pythagorean theorem",()=> {
    it("side a = 0, side b = 0, should be 0", () =>{
        assert.equal(pythagorean.getHypotenuse(0,0), 0);
    });
    it("side a = 1, side b = 0, should be 1", () =>{
        assert.equal(pythagorean.getHypotenuse(1,0), 1);
    });
    it("side a = 0, side b = 1, should be 1", () =>{
        assert.equal(pythagorean.getHypotenuse(0,1), 1);
    });
    it("side a = 3, side b=4, should be 10", () =>{
        assert.equal(pythagorean.getHypotenuse(3,4), 5);
    });
    it("side a = 5, side b=12, should be 13", () =>{
        assert.equal(pythagorean.getHypotenuse(5,12), 13);
    });

    it("side a = 0, hypo = 0, should be 0", () =>{
        assert.equal(pythagorean.getSide(0,0), 0);
    });
    it("side a = 1,  hypo = 0, should be 0", () =>{
        assert.equal(pythagorean.getSide(1,1), 0);
    });
    it("side a = 3, side Hypo=5, b should be 4", () =>{
        assert.equal(pythagorean.getSide(3,5), 4);
    });
    it("side a = 5, side Hypo=13, b should be 12", () =>{
        assert.equal(pythagorean.getSide(5,13), 12);
    });

});