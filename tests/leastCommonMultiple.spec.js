const assert = require('assert')
const leastCommonMultiple = require('../lib/leastCommonMultiple')
 
describe( "Least Commun multple",()=> {
    it("from 4 and 6, should be 12", () =>{
        assert.equal(leastCommonMultiple(4,6), 12);
    });

});
 