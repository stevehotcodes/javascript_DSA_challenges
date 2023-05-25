const fizzBuzz =require("./fizzbuzz")
//mock console.log

describe("fizzbuzz",()=>{
     it("Should return a fizz if divisible by 5",()=>{
      const consoleLogSpy=jest.spyOn(console, 'log').mockImplementation()
         fizzBuzz(97)
        expect(consoleLogSpy).toHaveBeenCalledWith("buzz")
     })
     it("Should return a fizz if divisible by 3",()=>{
      const consoleLogSpy=jest.spyOn(console, 'log').mockImplementation()
         fizzBuzz(97)
        expect(consoleLogSpy).toHaveBeenCalledWith("fizz")
        
     })
     it("Should return a fizzbuzz if divisible by 3 and 5",()=>{
       const consoleLogSpy=jest.spyOn(console, 'log').mockImplementation()
      fizzBuzz(97)
      expect(consoleLogSpy).toHaveBeenCalledWith("fizzbuzz")
     })
})