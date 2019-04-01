const math = require('math')
    
const pythagorean = {
    /**
     * Pythagorean
     * Calculing hypotenuse
     * @param {*} a
     * @param {*} b
     * @return {*} hypotenuse
     */
    getHypotenuse: getHypotenuse = (a,b)=>{
        let hypotenuse = math.sqrt((a*a) +(b*b))
        return hypotenuse
    },
    /**
     * GetSide
     * getting one side, from other side and hypo
     * @param {*} sideA
     * @param {*} hypo
     * @returns
     */
    getSide: getSide = (sideA, hypo)=>{
        let sideB = math.sqrt((hypo*hypo) - (sideA*sideA))
        return sideB
    }


}
    
module.exports = pythagorean;