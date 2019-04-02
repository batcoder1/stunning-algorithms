    
const pythagorean = {
    /**
     * Pythagorean
     * Calculing hypotenuse
     * @param {number} a
     * @param {number} b
     * @return {number} hypotenuse
     */
    getHypotenuse: getHypotenuse = (a,b)=>{
        let hypotenuse = Math.sqrt((a*a) +(b*b))
        return hypotenuse
    },
    /**
     * GetSide
     * getting one side, from other side and hypo
     * @param {number} sideA
     * @param {number} hypo
     * @returns {number} sideB
     */
    getSide: getSide = (sideA, hypo)=>{
        let sideB = Math.sqrt((hypo*hypo) - (sideA*sideA))
        return sideB
    }


}
    
module.exports = pythagorean;