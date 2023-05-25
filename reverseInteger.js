function reverseIntegers(n){
    
    if(typeof(n)=="number"){
      let numStr= n.toString()
      let result=numStr.split('').reverse().join("")
      return  parseInt(result) 
      
    }
    
}
reverseIntegers(1234)
module.exports =reverseIntegers







