const assert = require('assert')
const reverse = require('./stringReverser')
const reverseInteger = require('./reverseInteger')
const isPalindrome = require('./isPalindrome')
const leastCommonMultiple = require('./leastCommonMultiple')
const euclideanGCD = require('./euclideanGCD')
describe ("Reversión de cadenas", () => { 
    it (" Debe invertir la cadena ", () => { 
      assert.equal (reverse ("Hello World!"), "!dlroW olleH"); 
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