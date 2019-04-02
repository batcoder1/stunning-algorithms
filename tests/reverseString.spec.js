const assert = require('assert')
const reverseString = require('../lib/reverseString')

describe ("Reverse string", () => { 
    it (" Should return !dlroW olleH ", () => { 
      assert.equal (reverseString ("Hello World!"), "!dlroW olleH"); 
    }); 
}) ;

 