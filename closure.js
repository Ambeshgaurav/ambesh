// function init() {
//   let name = 'abcd'; 
//   const  ambesh=15;
//   console.log(name);
  
//     function displayName()
//      { 
//          name ="Ambesh Singh"
//       console.log(name);
//       console.log(ambesh);
      
//     }
//     displayName();
//   }
//   init();
// function makeSizer(size) {
//     return function() { 
//     };
//   }
  
//   console.log( makeSizer(12));
//   console.log(makeSizer(14));
function makeAdder(x) {
    console.log(">>>>>",x);
    return function(y) {
        console.log("<<<<<<>>>>>",x,y);
        return x + y;
    };
  }
  
  console.log(makeAdder(5)(2));
   
//   var add10 = makeAdder(10);
  
 // console.log(add5(2));  
  //console.log(add10(2));