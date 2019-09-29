// const geocode=(name ,callback)=>
// {
//     setTimeout(() => {
//         const data={
//             name :"ambesh",
//             age:27,
//         }
//            callback(data)
        
        
//     },2000);
// }
// geocode("gaurav",(data1)=>{
//     console.log(data1);    
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// let add=(a,b,callback)=>
// {
//     setTimeout(() => {
//          callback(a+b)
                
//             },2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
let add=(a,b,callback)=>
{
   
         callback(a+b)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

console.log("ambesh");


