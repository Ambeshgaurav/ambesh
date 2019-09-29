let calculator=(value,a,b,callback)=>
{
    console.log("hello what want to do:" +value);
   let sum={
       add:a+b,
       subtract:a-b,
       multiply:a*b,
       division:a/b,
   }
   callback(sum)
}
calculator("addition",10,5,(ans)=>
{
    console.log("your answer is :");
    console.log(ans.add);
    
})
calculator("subtraction",10,5,(ans)=>
{
    console.log("your answer is :");
    console.log(ans.subtract);
    
})
calculator("multiplication",10,5,(ans)=>
{
    console.log("your answer is :");
    console.log(ans.multiply);
    
})
calculator("division",10,5,(ans)=>
{
    console.log("your answer is :");
    console.log(ans.division);
    
})



