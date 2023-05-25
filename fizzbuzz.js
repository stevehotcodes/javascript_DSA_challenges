function fizzBuzz(n){
   for(let i=0;i<=n;i++){
    if (i%15===0)
        {
            console.log("fizzbuzz") 
        }
       else if (i%3===0)
        {
            console.log("fizz") 
        }
        else if (i%5===0)
        {
            console.log("buzz") 
        }
    
         else{
        console.log(i.toString()) 
         }
   }
        

}
// const result= fizzBuzz(4);
// console.log(result)
module.exports=fizzBuzz
