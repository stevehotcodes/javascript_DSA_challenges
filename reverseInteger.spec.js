// const { describe } = require("yargs")

const reverseIntegers =require('./reverseInteger')
describe ("reverseIntegers", ()=>{
    it('should be a type number',()=>{
        const result =reverseIntegers(567)
        expect(result).toBe(765)
    })
})