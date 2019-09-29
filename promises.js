// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]
let promises=new Promise((resolve,reject)=>{
    let clean=false;
    if(clean)
    {
        resolve("done work");
    }
    else{
        reject("not done");
    }

});
promises.then((donework)=>
{
   console.log(`work is  ${donework}`);
   
}).catch((notdone)=>
{
  console.log(`work ${notdone}`);
  
})
  
  