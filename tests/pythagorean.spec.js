const assert = require('assert')
const pythagorean = require('../lib/pythagorean')
 

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
